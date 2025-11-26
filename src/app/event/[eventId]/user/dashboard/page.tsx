// "use client";
// import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackFileExplorer,
//   SandpackCodeEditor,
//   SandpackPreview,
// } from "@codesandbox/sandpack-react";
// import { nightOwl } from "@codesandbox/sandpack-themes";
// import { useUploadStore } from "@/hooks/useStore";
// import { Loader2Icon } from "lucide-react";
// import { Resizable } from "react-resizable";
// import "react-resizable/css/styles.css";

// type SandpackFiles = Record<string, { code: string; hidden?: boolean }>;

// // List of files/directories to exclude
// const EXCLUDED_PATHS = [
//   "node_modules",
//   ".git",
//   ".gitignore",
//   ".DS_Store",
//   "package-lock.json",
//   "yarn.lock",
//   "dist",
//   "build",
//   ".next",
//   ".vscode",
//   "Thumbs.db",
//   ".env",
//   ".env.local",
//   ".idea",
// ];

// const Page = () => {
//   const router = useRouter();
//   const { files } = useUploadStore();
//   const { eventId } = useParams<{ eventId: string }>();
//   const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>(
//     {} as SandpackFiles
//   );
//   const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
//   const [isLoading, setIsLoading] = useState(false);
//   const [explorerWidth, setExplorerWidth] = useState(300); // Initial width for file explorer

//   const handleTabChange = (tab: "code" | "preview") => {
//     setActiveTab(tab);
//   };

//   const shouldExcludeFile = (filePath: string): boolean => {
//     const lowerCasePath = filePath.toLowerCase();
//     return EXCLUDED_PATHS.some(
//       (excludedPath) =>
//         lowerCasePath.includes(excludedPath.toLowerCase()) ||
//         lowerCasePath.startsWith(`/${excludedPath.toLowerCase()}`)
//     );
//   };

//   useEffect(() => {
//     const processFiles = async () => {
//       console.log("!files");
//       if (!files || files.length === 0) {
//         router.push(`/event/${eventId}/user/upload`);
//         // return;
//       }

//       setIsLoading(true);
//       const filesObj: SandpackFiles = {} as SandpackFiles;

//       await Promise.all(
//         Array.from(files).map(async (file) => {
//           const fullPath = file.webkitRelativePath || file.name;
//           const cleanPath = "/" + fullPath.split("/").slice(1).join("/");

//           if (shouldExcludeFile(cleanPath)) return;

//           if (
//             file.type &&
//             !file.type.startsWith("text/") &&
//             !file.name.match(/\.(js|jsx|ts|tsx|css|scss|html|json|md|txt)$/i)
//           ) {
//             return;
//           }

//           try {
//             filesObj[cleanPath] = {
//               code: await file.text(),
//               hidden: false,
//             };
//           } catch (error) {
//             console.warn(`Could not read file ${cleanPath}:`, error);
//           }
//         })
//       );

//       setSandpackFiles(filesObj);
//       setIsLoading(false);
//     };

//     processFiles();
//   }, [files]);

//   const getEntryFile = (): string => {
//     if (Object.keys(sandpackFiles).length === 0) return "/App.js";

//     const possibleEntryPoints = [
//       "/src/main.jsx",
//       "/src/main.tsx",
//       "/src/App.jsx",
//       "/src/App.tsx",
//       "/App.jsx",
//       "/App.tsx",
//       "/index.js",
//       "/index.tsx",
//     ];

//     const foundEntry = possibleEntryPoints.find((path) => sandpackFiles[path]);
//     return foundEntry || Object.keys(sandpackFiles)[0];
//   };

//   const handleResize = (
//     event: React.SyntheticEvent,
//     { size }: { size: { width: number; height: number } }
//   ) => {
//     setExplorerWidth(size.width);
//   };

//   return (
//     <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-gray-900 font-sans">
//       {/* Sticky Tab Navigation */}
//       <div className="sticky top-0 z-10 bg-gray-800 p-3 shadow-md">
//         <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg w-fit">
//           {(["code", "preview"] as const).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out ${
//                 activeTab === tab
//                   ? "bg-blue-600 text-white shadow-sm"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white"
//               }`}
//               aria-label={`Switch to ${tab} view`}
//               aria-selected={activeTab === tab}
//               role="tab"
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       {Object.keys(sandpackFiles).length > 0 ? (
//         <SandpackProvider
//           files={sandpackFiles}
//           template="react-ts"
//           theme={nightOwl}
//           customSetup={{
//             entry: getEntryFile(),
//           }}
//           options={{
//             externalResources: ["https://cdn.tailwindcss.com"],
//             classes: {
//               "sp-layout": "h-[calc(100vh-4rem)]",
//             },
//             activeFile: Object.keys(sandpackFiles)[0],
//           }}
//         >
//           <SandpackLayout>
//             {activeTab === "code" ? (
//               <div className="flex h-full">
//                 <Resizable
//                   width={explorerWidth}
//                   height={Infinity}
//                   onResize={handleResize}
//                   minConstraints={[200, Infinity]}
//                   maxConstraints={[500, Infinity]}
//                   className="border-r border-gray-700"
//                   handle={
//                     <div className="w-1 bg-gray-600 hover:bg-blue-500 cursor-col-resize" />
//                   }
//                 >
//                   <div
//                     className="p-2 bg-gray-800"
//                     style={{ width: explorerWidth, height: "100%" }}
//                   >
//                     <input
//                       type="text"
//                       placeholder="Search files..."
//                       className="w-full mb-2 p-2 text-sm bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <SandpackFileExplorer
//                       autoHiddenFiles={false}
//                       style={{ height: "calc(100% - 40px)" }}
//                     />
//                   </div>
//                 </Resizable>
//                 <div className="flex-1">
//                   <SandpackCodeEditor
//                     showLineNumbers
//                     showTabs
//                     closableTabs
//                     style={{ height: "100%" }}
//                   />
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full h-full bg-gray-800">
//                 <div className="flex items-center p-2 bg-gray-900 border-b border-gray-700">
//                   <button
//                     className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
//                     onClick={() => window.location.reload()}
//                     aria-label="Refresh preview"
//                   >
//                     Refresh
//                   </button>
//                 </div>
//                 <SandpackPreview
//                   showNavigator
//                   style={{ height: "calc(100% - 44px)", width: "100%" }}
//                 />
//               </div>
//             )}
//           </SandpackLayout>
//         </SandpackProvider>
//       ) : (
//         <div className="flex items-center justify-center h-full bg-gray-900">
//           {isLoading ? (
//             <div className="flex flex-col items-center gap-4">
//               <Loader2Icon className="animate-spin w-12 h-12 text-blue-500" />
//               <p className="text-white text-lg">Processing your files...</p>
//             </div>
//           ) : (
//             <div className="text-center">
//               <p className="text-gray-300 text-lg mb-4">
//                 No files uploaded yet
//               </p>
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 onClick={() => router.back()} // Adjust route as needed
//                 aria-label="Go Back to Upload Files Page"
//               >
//                 Upload Files
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { useUploadStore } from "@/hooks/useStore";
import { motion } from "framer-motion";
import { Code2, Eye, Globe, RefreshCw, Search } from "lucide-react";
import { ArrowLeft, TerminalSquare } from "lucide-react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

type SandpackFiles = Record<string, { code: string; hidden?: boolean }>;

const zincTheme = {
  colors: {
    // Surface colors
    surface1: "#09090b", // zinc-950
    surface2: "#18181b", // zinc-900
    surface3: "#27272a", // zinc-800

    // Text colors
    base: "#fafafa", // zinc-50
    disabled: "#71717a", // zinc-500
    hover: "#ffffff",

    // Border and accent
    accent: "#8b5cf6", // violet-500
    border: "#3f3f46", // zinc-700

    // UI elements
    clickable: "#a1a1aa", // zinc-400
    icon: "#a1a1aa", // zinc-400
  },
  syntax: {
    keyword: "#c084fc", // violet-400
    property: "#38bdf8", // sky-400
    plain: "#fafafa", // zinc-50
    static: "#fb7185", // rose-400
    string: "#4ade80", // green-400
    definition: "#e879f9", // fuchsia-400
    punctuation: "#fafafa", // zinc-50
    tag: "#38bdf8", // sky-400
    comment: "#71717a", // zinc-500
  },
  font: {
    body: '"Inter", sans-serif',
    mono: '"JetBrains Mono", monospace',
    size: "13px",
    lineHeight: "20px",
  },
};
// List of files/directories to exclude
const EXCLUDED_PATHS = [
  "node_modules",
  ".git",
  ".gitignore",
  ".DS_Store",
  "package-lock.json",
  "yarn.lock",
  "dist",
  "build",
  ".next",
  ".vscode",
  "Thumbs.db",
  ".env",
  ".env.local",
  ".idea",
];

const Page = () => {
  const router = useRouter();
  const { files } = useUploadStore();
  const { eventId } = useParams<{ eventId: string }>();
  const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>(
    {} as SandpackFiles
  );
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [isLoading, setIsLoading] = useState(false);
  const [explorerWidth, setExplorerWidth] = useState(300); // Initial width for file explorer
  console.log(isLoading);
  // const handleTabChange = (tab: "code" | "preview") => {
  //   setActiveTab(tab);
  // };

  const shouldExcludeFile = (filePath: string): boolean => {
    const lowerCasePath = filePath.toLowerCase();
    return EXCLUDED_PATHS.some(
      (excludedPath) =>
        lowerCasePath.includes(excludedPath.toLowerCase()) ||
        lowerCasePath.startsWith(`/${excludedPath.toLowerCase()}`)
    );
  };

  useEffect(() => {
    const processFiles = async () => {
      console.log("!files");
      if (!files || files.length === 0) {
        router.push(`/event/${eventId}/user/upload`);
        // return;
      }

      setIsLoading(true);
      const filesObj: SandpackFiles = {} as SandpackFiles;

      await Promise.all(
        Array.from(files).map(async (file) => {
          const fullPath = file.webkitRelativePath || file.name;
          const cleanPath = "/" + fullPath.split("/").slice(1).join("/");

          if (shouldExcludeFile(cleanPath)) return;

          if (
            file.type &&
            !file.type.startsWith("text/") &&
            !file.name.match(/\.(js|jsx|ts|tsx|css|scss|html|json|md|txt)$/i)
          ) {
            return;
          }

          try {
            filesObj[cleanPath] = {
              code: await file.text(),
              hidden: false,
            };
          } catch (error) {
            console.warn(`Could not read file ${cleanPath}:`, error);
          }
        })
      );

      setSandpackFiles(filesObj);
      setIsLoading(false);
    };

    processFiles();
  }, [files]);

  const getEntryFile = (): string => {
    if (Object.keys(sandpackFiles).length === 0) return "/App.js";

    const possibleEntryPoints = [
      "/src/main.jsx",
      "/src/main.tsx",
      "/src/App.jsx",
      "/src/App.tsx",
      "/App.jsx",
      "/App.tsx",
      "/index.js",
      "/index.tsx",
    ];

    const foundEntry = possibleEntryPoints.find((path) => sandpackFiles[path]);
    return foundEntry || Object.keys(sandpackFiles)[0];
  };

  const handleResize = (
    event: React.SyntheticEvent,
    { size }: { size: { width: number; height: number } }
  ) => {
    setExplorerWidth(size.width);
  };

  // Removed duplicate early return; main editor UI is rendered later in this component.

  // The small early-return UI was removed to avoid prematurely closing the Page component;
  // the full editor/preview UI is rendered below in the single main return.

  // --- Main Editor UI ---
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] bg-zinc-950 font-sans text-zinc-300 overflow-hidden ">
      {/* 1. Top Navigation Bar (Toolbar) */}
      <header className="h-14 shrink-0 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4 z-20">
        {/* Left: Branding & Back */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-colors"
            title="Go Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="h-4 w-[1px] bg-zinc-800"></div>
          <div className="flex items-center gap-2">
            <TerminalSquare className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold text-zinc-200 tracking-tight">
              Project Preview
            </span>
          </div>
        </div>

        {/* Right: Code / Preview Toggles */}
        <div className="bg-zinc-900 p-1 rounded-lg border border-zinc-800 flex items-center gap-1">
          {(["code", "preview"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-zinc-700 rounded-md shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === "code" ? (
                  <Code2 className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </header>

      {/* 2. Main Content Area */}
      <div className="flex-1 relative">
        <SandpackProvider
          files={sandpackFiles}
          template="react-ts"
          theme={zincTheme}
          customSetup={{ entry: getEntryFile ? getEntryFile() : "/App.tsx" }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            classes: {
              "sp-layout": "h-[calc(100vh-4rem)]",
            },
            // activeFile: Object.keys(sandpackFiles)[0],
            activeFile: sandpackFiles["src/App.jsx"]
              ? "src/App.jsx"
              : Object.keys(sandpackFiles)[0],
            // visibleFiles: ["/App.tsx"],
            // visibleFiles: ["/App.jsx"],
          }}
        >
          <SandpackLayout className="h-full border-none bg-zinc-950 !rounded-none overflow-hidden">
            {activeTab === "code" ? (
              <div className="flex w-full h-full">
                {/* Custom Resizable Sidebar */}
                <Resizable
                  height={Infinity}
                  onResizeStop={handleResize}
                  handle={
                    <div className="w-1 cursor-col-resize hover:bg-indigo-500 transition-colors bg-zinc-800/50 h-auto" />
                  }
                  className="bg-zinc-900/50 border-r border-zinc-800 flex flex-col min-h-0"
                  width={explorerWidth}
                >
                  <div className=" pl-0 h-full flex flex-col min-h-0 bg-red-500">
                    {/* Search Bar */}
                    <div className="relative mb-1 shrink-0">
                      <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="Search files..."
                        className="w-full pl-8 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                    {/* Sandpack Explorer */}
                    {/* Sandpack Explorer - Fixed height with scroll */}
                    <div className="flex-1 flex flex-col ml-2 max-h-[600px] ">
                      <div className="flex-1 pb-[400px] overflow-scroll">
                        <SandpackFileExplorer
                          autoHiddenFiles={true}
                          style={{
                            height: "100%",
                            minHeight: 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Resizable>

                {/* Editor Area */}
                <div className="flex-1 bg-zinc-950 h-full overflow-hidden">
                  <SandpackCodeEditor
                    showLineNumbers
                    showTabs
                    closableTabs={true}
                    wrapContent={false}
                    style={{
                      height: "80vh",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  />
                </div>
              </div>
            ) : (
              /* Preview Mode - Browser Mockup */
              <div className="w-full h-full bg-zinc-900 flex flex-col">
                {/* Browser Address Bar */}
                <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-4 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>

                  {/* Fake URL Bar */}
                  <div className="flex-1 max-w-xl mx-auto bg-zinc-950 border border-zinc-800 rounded flex items-center px-3 h-7">
                    <Globe className="w-3 h-3 text-zinc-600 mr-2" />
                    <span className="text-xs text-zinc-500">
                      localhost:3000/preview
                    </span>
                  </div>

                  {/* Refresh Button - We need to target the iframe refresh, usually Sandpack handles this internally via the refresh button in SandpackPreview, 
                      but we can add a visual one or try to hook into it. For UI purposes: */}
                  <button
                    className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors"
                    title="Reload Preview"
                    onClick={() => {
                      // Hacky way to force refresh if Sandpack doesn't expose a ref easily in this structure
                      const iframe = document.querySelector("iframe");
                      if (iframe) iframe.src = iframe.src;
                    }}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* The Actual Preview */}
                <div className="flex-1 relative bg-white h-full">
                  <SandpackPreview
                    showNavigator={false} // We built our own custom navigator above
                    showOpenInCodeSandbox={false}
                    showRefreshButton={false} // Using our custom one
                    style={{ height: "100vh", width: "100%" }}
                  />
                </div>
              </div>
            )}
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default Page;
