'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { unzipFromUrl } from '@/libs/unzip-utils'
import { WebContainer } from '@webcontainer/api'

type UserProject = {
  id: string;
  email: string;
  isPublic: boolean;
  storageUrl: string | null;
  role: string;
};
type FileNode = {
  type: 'file';
  name: string;
  path: string;
};

type FolderNode = {
  type: 'folder';
  name: string;
  path: string;
  children: TreeNode[];
};

type TreeNode = FileNode | FolderNode;

export default function PanelistDashboard() {
  const [users, setUsers] = useState<UserProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverUrl, setServerUrl] = useState<string | null>(null);
  const [webContainerInstance, setWebContainerInstance] = useState<WebContainer | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Convert flat file paths to hierarchical structure
  const buildFileTree = (files: Record<string, any>): TreeNode[] => {
    const root: FolderNode = {
      type: 'folder',
      name: '',
      path: '',
      children: []
    };

    Object.entries(files).forEach(([filePath]) => {
      const parts = filePath.split('/');
      let current = root;

      parts.forEach((part, index) => {
        const isFile = index === parts.length - 1;
        const currentPath = parts.slice(0, index + 1).join('/');

        if (isFile) {
          current.children.push({
            type: 'file',
            name: part,
            path: currentPath
          });
        } else {
          let folder = current.children.find(
            child => child.type === 'folder' && child.name === part
          ) as FolderNode | undefined;

          if (!folder) {
            folder = {
              type: 'folder',
              name: part,
              path: currentPath,
              children: []
            };
            current.children.push(folder);
          }
          current = folder;
        }
      });
    });

    // Remove the empty root and return immediate children
    return root.children;
  };

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get('/api/panelist');
      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    return () => {
      webContainerInstance?.teardown();
    };
  }, [webContainerInstance]);

  // 
  const previewProject = async (zipUrl: string) => {
    setLoading(true);
    setError(null);
    setServerUrl(null);

    try {
      const files:any = await unzipFromUrl(zipUrl);
      const tree = buildFileTree(files);
      console.log('File tree:', tree);

      // 3. Create WebContainer filesystem (without root)
      const fileSystem: Record<string, any> = {};
      
      for (const [filePath, content] of Object.entries(files)) {
        const pathParts = filePath.split('/');
        let currentLevel = fileSystem;

        // Skip the root directory level
        const startIndex = pathParts.length > 1 ? 1 : 0;
        
        // Create directory structure
        for (let i = startIndex; i < pathParts.length - 1; i++) {
          const part = pathParts[i];
          if (!currentLevel[part]) {
            currentLevel[part] = { directory: {} };
          }
          currentLevel = currentLevel[part].directory;
        }

        // Add file to final directory
        const fileName = pathParts[pathParts.length - 1];
        currentLevel[fileName] = {
          file: { contents: await content }
        };
      }


      const webContainer = await WebContainer.boot();
      setWebContainerInstance(webContainer);
      console.log(fileSystem)
      await webContainer.mount(fileSystem);
      console.log("Mounted project to WebContainer");

      const install = await webContainer.spawn('npm', ['install']);
      install.output.pipeTo(new WritableStream({
        write(data) {
          console.log('📦 npm install:', data);
        },
      }));
      await install.exit;

      console.log('✅ Dependencies installed');

      const server = await webContainer.spawn('npm', ['run', 'dev']);
      server.output.pipeTo(new WritableStream({
        write(data) {
          console.log('🚀 Dev Server:', data);
        },
      }));

      webContainer.on('server-ready', (port, url) => {
        console.log(`🌐 Dev server ready on port ${port}, url: ${url}`);
        setServerUrl(url);
      });

    } catch (error) {
      console.error("Error previewing project:", error);
      setError(error instanceof Error ? error.message : 'Failed to preview project');
      webContainerInstance?.teardown();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Panelist Dashboard</h1>
      
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          Error: {error}
        </div>
      )}

      {serverUrl && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Project Preview</h2>
          <iframe
            src={serverUrl}
            className="w-full h-[600px] border rounded-lg shadow-lg"
            sandbox="allow-scripts allow-same-origin"
            title="Project Preview"
          />
          <p className="mt-2 text-sm text-gray-500">
            Preview URL: <a href={serverUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {serverUrl}
            </a>
          </p>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">User Projects</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          <ul className="space-y-4">
            {users.map(user => (
              <li key={user.id} className="border p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{user.email}</p>
                    <p className="text-sm text-gray-600">
                      Project: {user.storageUrl ? "Available" : "Not Uploaded"}
                    </p>
                  </div>
                  {user.storageUrl && (
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
                      onClick={() => previewProject(user.storageUrl!)}
                      disabled={loading}
                    >
                      {loading ? 'Loading Preview...' : 'Preview'}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}