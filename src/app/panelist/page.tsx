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

export default function PanelistDashboard() {
  const [users, setUsers] = useState<UserProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverUrl, setServerUrl] = useState<string | null>(null);
  const [webContainerInstance, setWebContainerInstance] = useState<WebContainer | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const previewProject = async (zipUrl: string) => {
    setLoading(true);
    setError(null);
    setServerUrl(null);

    try {
      const files = await unzipFromUrl(zipUrl);
      const fileSystem = await Promise.all(
        Object.entries(files).map(async ([filePath, content]) => {
          const fileName = filePath.split('/').pop() || filePath;
          return {
            [fileName]: {
              file: { contents: await content }
            }
          };
        })
      ).then(entries => Object.assign({}, ...entries));

      const webContainer = await WebContainer.boot();
      setWebContainerInstance(webContainer);
      await webContainer.mount(fileSystem);

      // Install dependencies
      const install = await webContainer.spawn('npm', ['install']);
      await install.exit;

      // Start dev server
      const server = await webContainer.spawn('npm', ['run', 'dev']);
      
      // Handle server output
      server.output.pipeTo(new WritableStream({
        write(data) {
          console.log('Server:', data);
        }
      }));

      // Wait for server to be ready
      webContainer.on('server-ready', (port, url) => {
        console.log('Server ready at:', url);
        setServerUrl(url);
      });

    } catch (error) {
      console.error("Error loading project", error);
      setError(error instanceof Error ? error.message : 'Failed to load project');
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