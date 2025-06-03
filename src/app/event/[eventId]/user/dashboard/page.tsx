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
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useUploadStore } from "@/hooks/useStore";
import { Loader2Icon } from "lucide-react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

type SandpackFiles = Record<string, { code: string; hidden?: boolean }>;

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
  const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>({} as SandpackFiles);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [isLoading, setIsLoading] = useState(false);
  const [explorerWidth, setExplorerWidth] = useState(300); // Initial width for file explorer

  const handleTabChange = (tab: "code" | "preview") => {
    setActiveTab(tab);
  };

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
      console.log("!files")
      if (!files || files.length === 0) {
            router.push(`/event/${eventId}/user/upload`);
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

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-gray-900 font-sans">
      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-10 bg-gray-800 p-3 shadow-md">
        <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg w-fit">
          {(["code", "preview"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              aria-label={`Switch to ${tab} view`}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {Object.keys(sandpackFiles).length > 0 ? (
        <SandpackProvider
          files={sandpackFiles}
          template="react-ts"
          theme={nightOwl}
          customSetup={{
            entry: getEntryFile(),
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            classes: {
              "sp-layout": "h-[calc(100vh-4rem)]",
            },
            activeFile: Object.keys(sandpackFiles)[0],
          }}
        >
          <SandpackLayout>
            {activeTab === "code" ? (
              <div className="flex h-full">
                <Resizable
                  width={explorerWidth}
                  height={Infinity}
                  onResize={handleResize}
                  minConstraints={[200, Infinity]}
                  maxConstraints={[500, Infinity]}
                  className="border-r border-gray-700"
                  handle={<div className="w-1 bg-gray-600 hover:bg-blue-500 cursor-col-resize" />}
                >
                  <div
                    className="p-2 bg-gray-800"
                    style={{ width: explorerWidth, height: "100%" }}
                  >
                    <input
                      type="text"
                      placeholder="Search files..."
                      className="w-full mb-2 p-2 text-sm bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <SandpackFileExplorer autoHiddenFiles={false} style={{ height: "calc(100% - 40px)" }} />
                  </div>
                </Resizable>
                <div className="flex-1">
                  <SandpackCodeEditor
                    showLineNumbers
                    showTabs
                    closableTabs
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-800">
                <div className="flex items-center p-2 bg-gray-900 border-b border-gray-700">
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    onClick={() => window.location.reload()}
                    aria-label="Refresh preview"
                  >
                    Refresh
                  </button>
                </div>
                <SandpackPreview
                  showNavigator
                  style={{ height: "calc(100% - 44px)", width: "100%" }}
                />
              </div>
            )}
          </SandpackLayout>
        </SandpackProvider>
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-900">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2Icon className="animate-spin w-12 h-12 text-blue-500" />
              <p className="text-white text-lg">Processing your files...</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-300 text-lg mb-4">No files uploaded yet</p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => router.push("/upload")} // Adjust route as needed
                aria-label="Upload files"
              >
                Upload Files
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;