'use client';
import React, { JSX, useEffect, useState } from 'react';
import { useUploadStore, useUserDetails, useWebStore } from '@/hooks/useStore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { useWeb } from '@/app/useWebContainer';
type FileNode = {
  type: 'file';
  name: string;
  file: File;
};

type FolderNode = {
  type: 'folder';
  name: string;
  children: TreeNode[];
};

type TreeNode = FileNode | FolderNode;
type WebContainerFS = {
    [key: string]: 
      | { directory: WebContainerFS }
      | { file: { contents: string } }
  };
const Page = () => {
    const router = useRouter();
  const { files } = useUploadStore();
  
  const {setWebContainerData} = useWebStore();
  const [tree, setTree] = useState<FolderNode | null>(null);
  const [openedFile, setOpenedFile] = useState<FileNode | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {

    const ab = async ()=>{

        if (!files || files.length === 0) {
            router.push('/user/upload');
          }
        if (files && files.length > 0) {
          const root: FolderNode = { type: 'folder', name: 'root', children: [] };
    
          files.forEach((file) => {
            const typedFile = file as File & { webkitRelativePath?: string };
            const relPath = typedFile.webkitRelativePath;

            if (!relPath) return;
            const pathParts = typedFile.webkitRelativePath?.split('/') || [];
            const innerPathParts = pathParts.slice(1); // skip top-level folder
            if (innerPathParts.length > 0) {
              insertIntoTree(root, innerPathParts, file);
            }
          });
          setTree(root); // ✅ fix was needed here
          const pf =await convertTreeToWebContainerFS(root.children)
          console.log("pf:",pf)
          setWebContainerData(pf)
        }

    }
    ab();
  }, [files]);


  const convertTreeToWebContainerFS = async (
    nodes: TreeNode[]
  ): Promise<WebContainerFS> => {
    const fs: WebContainerFS = {};
    for (const node of nodes) {
      if (node.type === "folder") {
        fs[node.name] = {
          directory: await convertTreeToWebContainerFS(node.children),
        };
      } else if (node.type === "file") {
        const content = await node.file.text();
        fs[node.name] = {
          file: { contents: content },
        };
      }
    }
    return fs;
  };

//   
  const insertIntoTree = (node: FolderNode, pathParts: string[], file: File) => {
    if (pathParts.length === 1) {
      node.children.push({ type: 'file', name: pathParts[0], file });
      return;
    }

    const [folderName, ...rest] = pathParts;
    let child = node.children.find(
      (c) => c.type === 'folder' && c.name === folderName
    ) as FolderNode;

    if (!child) {
      child = { type: 'folder', name: folderName, children: [] };
      node.children.push(child);
    }

    insertIntoTree(child, rest, file);
  };

  const handleFileClick = async (node: FileNode) => {
    setOpenedFile(node);
    console.log("node:",node)
    const content = await node.file.text();
    setFileContent(content);
  };

  const toggleExpand = (path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderTree = (node: TreeNode, path = ''): JSX.Element => {
    const currentPath = `${path}/${node.name}`;

    if (node.type === 'file') {
      return (
        <div
          className="pl-6 cursor-pointer hover:text-blue-800 text-lg truncate"
          onClick={() => handleFileClick(node)}
        >
          📄 {node.name}
        </div>
      );
    }

    const isOpen = expanded[currentPath] ?? true;

    return (
      <div className="pl-4 text-black">
        <div
          className="cursor-pointer font-medium"
          onClick={() => toggleExpand(currentPath)}
        >
          {isOpen ? '📂' : '📁'} {node.name}
        </div>
        {isOpen &&
          node.children.map((child, idx) => (
            <div key={idx}>{renderTree(child, currentPath)}</div>
          ))}
      </div>
    );
  };

  return (
    <div className="flex w-full h-screen overflow-hidden text-black">
      {/* Sidebar Tree */}
      <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto border-r">
        <h2 className="text-lg font-semibold mb-2">📁 Project Files</h2>
        {tree ? renderTree(tree) : <p className="text-gray-500">No files uploaded</p>}
      </div>

      {/* Code Viewer */}
      <div className="w-2/3 p-4 overflow-y-auto bg-white">
      <Link href="/user/preview">
  <button className="bg-red-600 p-2 rounded-2xl hover:bg-red-900 float-right">
    Preview
  </button>
</Link>
        {openedFile ? (
          <>
            <h2 className="text-md font-bold mb-2">{openedFile.name}</h2>
            <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm whitespace-pre-wrap max-h-[90vh] overflow-auto">
              {fileContent}
            </pre>
          </>
        ) : (
          <p className="text-gray-500">Click a file to view its content</p>
        )}
      </div>
    </div>
  );
};

export default Page;
