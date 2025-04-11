// "use client";
// import { ChangeEvent, useCallback, useEffect, useState } from "react";
// import { useWeb } from "./useWebContainer";
// import "./globals.css";
// type FileNode = {
//   type: "file";
//   name: string;
//   file: File;
// };

// type FolderNode = {
//   type: "folder";
//   name: string;
//   children: TreeNode[];
// };

// type TreeNode = FileNode | FolderNode;

// export default function Home() {
//   const [tree, setTree] = useState<TreeNode[]>([]);
//   const [expandedPaths, setExpandedPaths] = useState<Record<string, boolean>>({});
//   const [fileContents, setFileContents] = useState<Record<string, string>>({});
//   const [showPreview, setShowPreview] = useState(false); // 👈 New state
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   // 
//   const webcontainer = useWeb();
//   console.log("thisweb:",webcontainer)
//   const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     const root: FolderNode = { type: "folder", name: "root", children: [] };

//     files.forEach((file) => {
//       const typedFile = file as File & { webkitRelativePath?: string };
//       const pathParts = typedFile.webkitRelativePath?.split("/") || [];
//      const innerPathParts = pathParts.slice(1); // Remove the top-level folder
//      if (innerPathParts.length > 0) {
//        insertIntoTree(root, innerPathParts, file);
//      }
//    });
//     const pf = await convertTreeToWebContainerFS(root.children);
//     console.log("pf:",pf)
//     // if (pf["package.json"]) {
//     //   const pkg = JSON.parse(pf["package.json"].file.contents);
    
//     //   if (pkg.scripts?.dev?.includes("vite") && !pkg.scripts.dev.includes("--host")) {
//     //     pkg.scripts.dev = pkg.scripts.dev + " --host";
//     //     pf["package.json"].file.contents = JSON.stringify(pkg, null, 2);
//     //   }
//     // }
//     // console.log("Modified package.json:", pf["package.json"].file.contents);

//     if (!webcontainer) {
//       console.warn("webcontainer not ready yet");
//       return;
//     }
//     console.log("webContainer:",webcontainer)
//     await webcontainer.mount(pf);
//     console.log("Mounted!");
//     setTree(root.children); // Ignore root wrapper
//     setExpandedPaths({});
//     setFileContents({});
//   };

//  const convertTreeToWebContainerFS = async (
//     nodes: TreeNode[]
//   ): Promise<Record<string, any>> => {
//     const fs: Record<string, any> = {};
//     for (const node of nodes) {
//       if (node.type === "folder") {
//         fs[node.name] = {
//           directory: await convertTreeToWebContainerFS(node.children),
//         };
//       } else if (node.type === "file") {
//         const content = await node.file.text();
//         fs[node.name] = {
//           file: { contents: content },
//         };
//       }
//     }
//     return fs;
//   };

//   const insertIntoTree = (node: FolderNode, pathParts: string[], file: File) => {
//     if (pathParts.length === 1) {
//       node.children.push({ type: "file", name: pathParts[0], file });
//       return;
//     }

//     const [folderName, ...rest] = pathParts;
//     let child = node.children.find(
//       (c) => c.type === "folder" && c.name === folderName
//     ) as FolderNode;

//     if (!child) {
//       child = { type: "folder", name: folderName, children: [] };
//       node.children.push(child);
//     }

//     insertIntoTree(child, rest, file);
//   };

//   const toggleExpand = (path: string) => {
//     setExpandedPaths((prev) => ({
//       ...prev,
//       [path]: !prev[path],
//     }));
//   };

//   const handleFileClick = async (file: File, path: string) => {
//     if (!fileContents[path]) {
//       const content = await file.text();
//       setFileContents((prev) => ({ ...prev, [path]: content }));
//     } else {
//       setFileContents((prev) => {
//         const newContents = { ...prev };
//         delete newContents[path];
//         return newContents;
//       });
//     }
//   };
//   const [url,setUrl] = useState("")
//   // const openPreview = async ()=>{
//   //   console.log("onPreviewCalled")
//   //   console.log("webContaienrOnPreview:",webcontainer)
//   //   const installProcess = await webcontainer?.spawn('npm', ['install']);
//   //   installProcess?.output.pipeTo(new WritableStream({
//   //       write(data){
//   //           console.log(data)
//   //         }
//   //       }))
//   //       // const installExitCode = await installProcess?.exit;
        
//   //       //  
//   //       console.log("OutCalled")
//   //       // `npm run dev`
//   //       await webcontainer?.spawn('npm', ['run', 'dev']);
        
//   //       webcontainer?.on('server-ready', (port, url) => {
//   //         console.log("Server is ready")
//   //         console.log(url)
//   //         console.log(port)
//   //         setUrl(url)
//   //       });
//   //       setShowPreview(!showPreview);
//   // }
//   const openPreview = useCallback(async () => {
//     if (!webcontainer) {
//       setError("WebContainer not initialized");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     if (showPreview) {
//       // Clean up preview
//       setUrl("");
//       setShowPreview(false);
//       setIsLoading(false);
//       return;
//     }

//     try {
//       // Run npm install
//       const installProcess = await webcontainer.spawn('npm', ['install']);
//       installProcess.output.pipeTo(
//         new WritableStream({
//           write(data) {
//             console.log("npm install:", data);
//           },
//         })
//       );
//       const installExitCode = await installProcess.exit;
//       if (installExitCode !== 0) {
//         throw new Error(`npm install failed with exit code ${installExitCode}`);
//       }

//       const devProcess = await webcontainer.spawn('npm', ['run', 'dev']);


//       // Start dev server
//       // const devProcess = await webcontainer.spawn('npm', ['run', 'dev']);
//       devProcess.output.pipeTo(
//         new WritableStream({
//           write(data) {
//             console.log("npm run dev:", data);
//           },
//         })
//       );

//       // Wait for server-ready event with timeout
//       const serverReadyPromise = new Promise<string>((resolve, reject) => {
//         const serverListener = (port: number, url: string) => {
//           console.log(`Server ready on port ${port}: ${url}`);
//           resolve(url);
//         };
//         webcontainer.on('server-ready', serverListener);
//         webcontainer.on('error', (err) => {
//           reject(new Error(`WebContainer error: ${err.message}`));
//         });

//         // Cleanup function for this listener
//         return () => {
//           // WebContainer doesn't provide a direct way to remove listeners,
//           // but we can ensure this runs only once by resolving the promise
//         };
//       });

//       const previewUrl = await Promise.race([
//         serverReadyPromise,
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error("Server startup timed out")), 10000)
//         ),
//       ]);

//       setUrl(previewUrl as string);
//       setShowPreview(true);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to start preview");
//       setShowPreview(false);
//       setUrl("");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [webcontainer, showPreview]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (webcontainer) {
//         // Attempt to terminate any running processes
//         webcontainer.spawn('kill', ['-9', 'node']).catch(() => {});
//       }
//     };
//   }, [webcontainer]);
//   const renderTree = (nodes: TreeNode[], parentPath = "") => {
//     return (
//       <ul className="ml-4">
//         {nodes.map((node, index) => {
//           const fullPath = `${parentPath}/${node.name}`;
//           if (node.type === "folder") {
//             return (
//               <li key={fullPath} className="mt-1">
//                 <div
//                   className="cursor-pointer font-semibold hover:underline"
//                   onClick={() => toggleExpand(fullPath)}
//                 >
//                   {expandedPaths[fullPath] ? "📂" : "📁"} {node.name}
//                 </div>
//                 {expandedPaths[fullPath] && renderTree(node.children, fullPath)}
//               </li>
//             );
//           } else {
//             return (
//               <li key={fullPath} className="text-sm mt-1">
//                 <span
//                   className="cursor-pointer text-blue-600 hover:underline"
//                   onClick={() => handleFileClick(node.file, fullPath)}
//                 >
//                   📄 {node.name}
//                 </span>
//                 {fileContents[fullPath] && (
//                   <pre className="bg-gray-100 p-2 mt-1 rounded text-xs whitespace-pre-wrap max-h-48 overflow-auto">
//                     {fileContents[fullPath]}
//                   </pre>
//                 )}
//               </li>
//             );
//           }
//         })}
//       </ul>
//     );
//   };

//   return (
//     <div className="flex h-screen w-full bg-white text-black">
//       {/* Left Section */}
//       <div className={`p-4 ${showPreview ? "w-1/2" : "w-full"} overflow-y-auto`}>
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl mb-4">Upload MERN App Folder</h1>
//           <button
//             className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
//             onClick={openPreview}
//           >
//             {showPreview ? "Close Preview" : "Show Preview"}
//           </button>
//         </div>
//         <input
//           type="file"
//           multiple
//           //@ts-ignore
//           webkitdirectory="true"
//           onChange={handleUpload}
//         />
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-2">📁 Folder Tree</h2>
//           {renderTree(tree)}
//         </div>
//       </div>

//       {/* Preview Section */}
//       {showPreview && (
//         <div className="w-1/2 border-l border-gray-300 h-full">
//           {url ? (
//             <iframe
//               src={url}
//               className="w-full h-full"
//               sandbox="allow-scripts allow-same-origin"
//               onError={() => setError("Preview connection lost")}
//             />
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <p>Loading preview...</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
