// // 'use client'

// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// // import { unzipFromUrl } from '@/libs/unzip-utils'
// // import { WebContainer ,FileSystemTree} from '@webcontainer/api'
// // import { useParams } from 'next/navigation'
// // import { useUserDetails } from '@/hooks/useStore'

// // type UserProject = {
// //   id: string;
// //   email: string;
// //   isPublic: boolean;
// //   storageUrl: string | null;
// //   role: string;
// // };
// // type Team = {
// //   id: string;
// //   name: string;
// //   projectUrl: string | null; // URL associated with the team project
// //   participants: UserProject[]; // Team members
// //   scores:Score[];
// // };
// // //
// // type Score = {
// //   id: string;
// //   marks: number;
// //   remarks: string | null;
// //   roundId: string;
// // };

// // type Round = {
// //   id: string;
// //   name: string;
// //   order: number;
// //   eventId: string;
// // };
// // //
// // type FileNode = {
// //   type: 'file';
// //   name: string;
// //   path: string;
// //   // file:File;
// //   content:Uint8Array | string;
// // };

// // type FolderNode = {
// //   type: 'folder';
// //   name: string;
// //   path: string;
// //   children: TreeNode[];
// // };

// // type TreeNode = FileNode | FolderNode;
// // type FileContent = {
// //   [path: string]: Uint8Array | string;
// // };

// // // Type for the file system structure for WebContainer
// // type FileSystemStructure = {
// //   [name: string]: {
// //     file?: {
// //       contents: Uint8Array | string;
// //     };
// //     directory?: FileSystemStructure;
// //   };
// // };
// // export default function PanelistDashboard() {

// //   const {eventId} = useParams();
// //   const {user} = useUserDetails();
// //   // const [users, setUsers] = useState<UserProject[]>([]);
// //   const [teams, setTeams] = useState<Team[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [serverUrl, setServerUrl] = useState<string | null>(null);
// //   const [webContainerInstance, setWebContainerInstance] = useState<WebContainer | null>(null);
// //   const [error, setError] = useState<string | null>(null);
// //   const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null);

// //   // Convert flat file paths to hierarchical structure
// //   // const buildFileTree = (files: Record<string, any>): TreeNode[] => {
// //   //   const root: FolderNode = {
// //   //     type: 'folder',
// //   //     name: '',
// //   //     path: '',
// //   //     children: []
// //   //   };

// //   //   Object.entries(files).forEach(([filePath]) => {
// //   //     const parts = filePath.split('/');
// //   //     let current = root;

// //   //     parts.forEach((part, index) => {
// //   //       const isFile = index === parts.length - 1;
// //   //       const currentPath = parts.slice(0, index + 1).join('/');

// //   //       if (isFile) {
// //   //         current.children.push({
// //   //           type: 'file',
// //   //           name: part,
// //   //           path: currentPath
// //   //         });
// //   //       } else {
// //   //         let folder = current.children.find(
// //   //           child => child.type === 'folder' && child.name === part
// //   //         ) as FolderNode | undefined;

// //   //         if (!folder) {
// //   //           folder = {
// //   //             type: 'folder',
// //   //             name: part,
// //   //             path: currentPath,
// //   //             children: []
// //   //           };
// //   //           current.children.push(folder);
// //   //         }
// //   //         current = folder;
// //   //       }
// //   //     });
// //   //   });

// //   //   // Remove the empty root and return immediate children
// //   //   return root.children;
// //   // };

// //   useEffect(() => {
// //     console.log("Participant Details calling......")
// //     async function fetchUsers() {
// //       const { data } = await axios.post('/api/panelist',{eventId});
// //       setTeams(data.teams);
// //       console.log("AllTeam:",data)
// //     }
// //     fetchUsers();
// //   }, []);

// //   useEffect(() => {
// //     return () => {
// //       webContainerInstance?.teardown();
// //     };
// //   }, [webContainerInstance]);

// //  const buildFileTree = (files: Record<string, Uint8Array | string>): FolderNode => {
// //     const root: FolderNode = {
// //       type: 'folder',
// //       name: '',
// //       path: '',
// //       children: []
// //     };

// //     Object.entries(files).forEach(([filePath, content]) => {
// //       const parts = filePath.split('/');
// //       let current = root;

// //       parts.forEach((part, index) => {
// //         const isFile = index === parts.length - 1;
// //         const currentPath = parts.slice(0, index + 1).join('/');

// //         if (isFile) {
// //           current.children.push({
// //             type: 'file',
// //             name: part,
// //             path: currentPath,
// //             content
// //           });
// //         } else {
// //           let folder = current.children.find(
// //             child => child.type === 'folder' && child.name === part
// //           ) as FolderNode | undefined;

// //           if (!folder) {
// //             folder = {
// //               type: 'folder',
// //               name: part,
// //               path: currentPath,
// //               children: []
// //             };
// //             current.children.push(folder);
// //           }
// //           current = folder;
// //         }
// //       });
// //     });

// //     return root;
// //   };

// //   const convertTreeToFileSystemTree = (node: FolderNode): FileSystemTree => {
// //     const result: FileSystemTree = {};

// //     for (const child of node.children) {
// //       if (child.type === 'folder') {
// //         result[child.name] = {
// //           directory: convertTreeToFileSystemTree(child)
// //         };
// //       } else {
// //         result[child.name] = {
// //           file: {
// //             contents: child.content
// //           }
// //         };
// //       }
// //     }

// //     return result;
// //   };

// //   const previewProject = async (zipUrl: string) => {
// //     setLoading(true);
// //     setError(null);
// //     setServerUrl(null);

// //     try {
// //       // 1. Unzip the project
// //       const files = await unzipFromUrl(zipUrl);
// //       console.log("Unzipped files:", files);

// //       // 2. Build file tree structure
// //       const fileTree = buildFileTree(files);
// //       console.log('File tree structure:', fileTree);

// //       // 3. Convert to WebContainer file system format
// //       const fileSystem = convertTreeToFileSystemTree(fileTree);
// //       console.log("File system for WebContainer:", fileSystem);

// //       // 4. Boot WebContainer
// //       console.log("Booting WebContainer...");
// //       const webContainer = await WebContainer.boot();
// //       setWebContainerInstance(webContainer);
// //       console.log(fileSystem)
// //       await webContainer.mount(fileSystem);
// //       console.log("Mounted project to WebContainer");

// //       const install = await webContainer.spawn('npm', ['install']);
// //       install.output.pipeTo(new WritableStream({
// //         write(data) {
// //           console.log('📦 npm install:', data);
// //         },
// //       }));
// //       await install.exit;

// //       console.log('✅ Dependencies installed');

// //       const server = await webContainer.spawn('npm', ['run', 'dev']);
// //       server.output.pipeTo(new WritableStream({
// //         write(data) {
// //           console.log('🚀 Dev Server:', data);
// //         },
// //       }));

// //       webContainer.on('server-ready', (port, url) => {
// //         console.log(`🌐 Dev server ready on port ${port}, url: ${url}`);
// //         setServerUrl(url);
// //       });

// //     } catch (error) {
// //       console.error("Error previewing project:", error);
// //       setError(error instanceof Error ? error.message : 'Failed to preview project');
// //       webContainerInstance?.teardown();
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   //

// //   // const [teamScores, setTeamScores] = useState<Record<string, { score: number; remarks: string }>>({});

// // // Update state on score or remarks change
// // // const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>, teamId: string) => {
// // //   // setTeamScores(prevState => ({
// // //   //   ...prevState,
// // //   //   [teamId]: { ...prevState[teamId], score: Number(e.target.value) }
// // //   // }));
// // // };

// // // const handleRemarksChange = (e: React.ChangeEvent<HTMLTextAreaElement>, teamId: string) => {
// // //   // setTeamScores(prevState => ({
// // //   //   ...prevState,
// // //   //   [teamId]: { ...prevState[teamId], remarks: e.target.value }
// // //   // }));
// // // };

// // const handleScoreSubmission = async (teamId: string, marks: number, remarks: string) => {
// //   if (!selectedRoundId) {
// //     setError('Please select a round first');
// //     return;
// //   }

// //   try {
// //     if(!user){
// //       return
// //     }
// //     const score = await axios.post('/api/panelist/score', {
// //       teamId,
// //       roundId: selectedRoundId,
// //       marks,
// //       remarks,
// //       userId:user.id
// //     });

// //     console.log("Team Score:",score)
// //     // Update local state
// //     setTeams(prevTeams => prevTeams.map(team => {
// //       if (team.id === teamId) {
// //         const existingScoreIndex = team.scores.findIndex(
// //           score => score.roundId === selectedRoundId
// //         );

// //         const newScore = {
// //           id: '', // Will be filled by the server
// //           marks,
// //           remarks,
// //           roundId: selectedRoundId
// //         };

// //         if (existingScoreIndex >= 0) {
// //           const updatedScores = [...team.scores];
// //           updatedScores[existingScoreIndex] = newScore;
// //           return { ...team, scores: updatedScores };
// //         } else {
// //           return { ...team, scores: [...team.scores, newScore] };
// //         }
// //       }
// //       return team;
// //     }));
// //   } catch (error) {
// //     setError('Failed to submit score');
// //     console.error(error);
// //   }
// // };

// // const getTeamScoreForRound = (team: Team, roundId: string) => {
// //   return team.scores.find(score => score.roundId === roundId);
// // };

// // useEffect(() => {
// //   async function fetchData() {
// //     try {
// //       setLoading(true);
// //       if(!user) {
// //         return ;
// //       }
// //       const [ roundsResponse] = await Promise.all([
// //         // axios.get(`/api/panelist/teams?eventId=${eventId}&userId=${user.id}`),
// //         axios.get(`/api/panelist/round?eventId=${eventId}&userId=${user.id}`)
// //       ]);
// //       console.log("roundResult:",roundsResponse)

// //       // setTeams(teamsResponse.data.teams);
// //       setRounds(roundsResponse.data.rounds);

// //       // Select the first round by default if available
// //       if (roundsResponse.data.rounds.length > 0) {
// //         setSelectedRoundId(roundsResponse.data.rounds[0].id);
// //       }
// //     } catch (err) {
// //       setError('Failed to fetch data');
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   fetchData();
// // }, [eventId]);
// // //
// // const [rounds, setRounds] = useState<Round[]>([]);

// // // useEffect(() => {
// // //   const fetchRounds = async () => {
// // //     const { data } = await axios.post('/api/panelist/round', { eventId });
// // //     setRounds(data.rounds);
// // //   };
// // //   fetchRounds();
// // // }, [eventId]);

// //   return (
// //     <div className="p-8">
// //     <h1 className="text-3xl font-bold mb-6">Panelist Dashboard</h1>

// //     {error && (
// //       <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
// //         Error: {error}
// //       </div>
// //     )}

// //     {serverUrl && (
// //       <div className="mb-6">
// //         <h2 className="text-xl font-semibold mb-3">Project Preview</h2>
// //         <iframe
// //           src={serverUrl}
// //           className="w-full h-[600px] border rounded-lg shadow-lg"
// //           sandbox="allow-scripts allow-same-origin"
// //           title="Project Preview"
// //         />
// //         <p className="mt-2 text-sm text-gray-500">
// //           Preview URL: <a href={serverUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
// //             {serverUrl}
// //           </a>
// //         </p>
// //       </div>
// //     )}

// //     <div className="mb-6">
// //       <label className="block font-medium mb-2">Select Round:</label>
// //       <select
// //         value={selectedRoundId ?? ''}
// //         onChange={(e) => setSelectedRoundId(e.target.value)}
// //         className="border px-3 py-2 rounded w-full text-white"
// //         disabled={loading || rounds.length === 0}
// //       >
// //         <option value="" disabled>Select a round</option>
// //         {rounds.map(round => (
// //           <option key={round.id} value={round.id} className='text-black'>
// //             {round.order}. {round.name}
// //           </option>
// //         ))}
// //       </select>
// //     </div>

// //     <div className="space-y-4">
// //       <h2 className="text-xl font-semibold">Teams</h2>
// //       {loading ? (
// //         <p className="text-gray-500">Loading teams...</p>
// //       ) : teams.length === 0 ? (
// //         <p className="text-gray-500">No teams found for this event</p>
// //       ) : (
// //         teams.map(team => (
// //           <div key={team.id} className="border p-4 rounded-lg shadow">
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <p className="font-medium">{team.name}</p>
// //                 <p className="text-sm text-gray-600">
// //                   Team Project: {team.projectUrl ? "Available" : "Not Uploaded"}
// //                 </p>
// //               </div>
// //               {team.projectUrl && (
// //                 <button
// //                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
// //                   onClick={() => previewProject(team.projectUrl!)}
// //                   disabled={loading}
// //                 >
// //                   {loading ? 'Loading Preview...' : 'Preview'}
// //                 </button>
// //               )}
// //             </div>

// //             <div className="mt-4">
// //               <h3 className="font-medium">Team Members</h3>
// //               <ul className="space-y-2">
// //                 {team.participants.map(member => (
// //                   <li key={member.id} className="border p-2 rounded-md flex justify-between">
// //                     <div>
// //                       <p className="font-medium">{member.email}</p>
// //                       <p className="text-sm text-gray-600">
// //                         Project: {member.storageUrl ? "Available" : "Not Uploaded"}
// //                       </p>
// //                     </div>
// //                     {member.storageUrl && (
// //                       <button
// //                         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
// //                         onClick={() => previewProject(member.storageUrl!)}
// //                         disabled={loading}
// //                       >
// //                         {loading ? 'Loading Preview...' : 'Preview'}
// //                       </button>
// //                     )}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {selectedRoundId && (
// //               <div className="mt-4">
// //                 <h3 className="font-medium">Score for {rounds.find(r => r.id === selectedRoundId)?.name}</h3>
// //                 <ScoreForm
// //                   teamId={team.id}
// //                   existingScore={getTeamScoreForRound(team, selectedRoundId)}
// //                   onSubmit={handleScoreSubmission}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   </div>
// // );
// // }

// // function ScoreForm({
// // teamId,
// // existingScore,
// // onSubmit
// // }: {
// // teamId: string;
// // existingScore?: {
// //   marks: number;
// //   remarks: string | null;
// // };
// // onSubmit: (teamId: string, marks: number, remarks: string) => void;
// // }) {
// // const [marks, setMarks] = useState(existingScore?.marks?.toString() || '');
// // const [remarks, setRemarks] = useState(existingScore?.remarks || '');
// // const [isSubmitting, setIsSubmitting] = useState(false);

// // const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   if (!marks) return;
// //   setIsSubmitting(true);
// //   try {
// //     await onSubmit(teamId, Number(marks), remarks);
// //   } finally {
// //     setIsSubmitting(false);
// //   }
// // };

// // return (
// //   <form onSubmit={handleSubmit} className="space-y-3">
// //     <div>
// //       <label className="block text-sm font-medium mb-1">Score (0-100)</label>
// //       <input
// //         type="number"
// //         min="0"
// //         max="100"
// //         required
// //         value={marks}
// //         onChange={(e) => setMarks(e.target.value)}
// //         className="w-full p-2 border rounded-lg"
// //       />
// //     </div>
// //     <div>
// //       <label className="block text-sm font-medium mb-1">Remarks</label>
// //       <textarea
// //         rows={3}
// //         value={remarks}
// //         onChange={(e) => setRemarks(e.target.value)}
// //         className="w-full p-2 border rounded-lg"
// //       />
// //     </div>
// //     <button
// //       type="submit"
// //       disabled={isSubmitting}
// //       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
// //     >
// //       {isSubmitting ? 'Submitting...' : existingScore ? 'Update Score' : 'Submit Score'}
// //     </button>
// //   </form>
// // );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { unzipFromUrl } from "@/libs/unzip-utils";
// import { useParams } from "next/navigation";
// import { useUserDetails } from "@/hooks/useStore";
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackFileExplorer,
//   SandpackCodeEditor,
//   SandpackPreview,
// } from "@codesandbox/sandpack-react";
// import { nightOwl } from "@codesandbox/sandpack-themes";
// import { Loader2Icon, ChevronRight, ChevronDown, FileText } from "lucide-react";
// import Lookup from "@/component/Lookup";

// // Types remain the same as before
// type UserProject = {
//   id: string;
//   email: string;
//   isPublic: boolean;
//   storageUrl: string | null;
//   role: string;
// };

// type Team = {
//   id: string;
//   name: string;
//   storageUrl: string | null;
//   participants: UserProject[];
//   scores: Score[];
// };

// type Score = {
//   id: string;
//   marks: number;
//   remarks: string | null;
//   roundId: string;
// };

// type Round = {
//   id: string;
//   name: string;
//   order: number;
//   eventId: string;
// };

// type SandpackFiles = Record<string, { code: string; hidden?: boolean }>;

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

// export default function PanelistDashboard() {
//   const { eventId } = useParams();
//   const { user } = useUserDetails();
//   const [teams, setTeams] = useState<Team[]>([]);
//   console.log("Panelist EventId:", eventId);
//   console.log("teams Data:", teams);
//   const [loading, setLoading] = useState({
//     teams: false,
//     rounds: false,
//     preview: false,
//     scores: false,
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null);
//   const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>(
//     Lookup.DEFAULT_FILE
//   );
//   const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
//   const [rounds, setRounds] = useState<Round[]>([]);
//   const [currentPreview, setCurrentPreview] = useState<{
//     name: string;
//     type: "team" | "participant";
//     timestamp: number;
//   } | null>(null);
//   const [expandedTeams, setExpandedTeams] = useState<Record<string, boolean>>(
//     {}
//   );

//   const toggleTeamExpansion = (teamId: string) => {
//     setExpandedTeams((prev) => ({
//       ...prev,
//       [teamId]: !prev[teamId],
//     }));
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
//     const fetchUsers = async () => {
//       try {
//         setLoading((prev) => ({ ...prev, teams: true }));
//         const { data } = await axios.post("/api/panelist", { eventId });
//         setTeams(data.teams);
//         console.log("team Data:", data.teams);
//         // Initialize expanded  state for each team
//         const initialExpandedState = data.teams.reduce(
//           (acc: Record<string, boolean>, team: Team) => {
//             acc[team.id] = false;
//             return acc;
//           },
//           {} as Record<string, boolean> // Explicit type assertion
//         );

//         setExpandedTeams(initialExpandedState);
//         console.log("setExpandedTeams", expandedTeams);
//         console.log("AllTeam:", initialExpandedState);
//       } catch (err) {
//         setError("Failed to load teams");
//         console.error(err);
//       } finally {
//         setLoading((prev) => ({ ...prev, teams: false }));
//       }
//     };
//     fetchUsers();
//   }, [eventId]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading((prev) => ({ ...prev, rounds: true }));
//         if (!user) return;
//         console.log("userRound:", eventId, user.id);
//         const [roundsResponse] = await Promise.all([
//           axios.get(`/api/panelist/round?eventId=${eventId}&userId=${user.id}`),
//         ]);

//         setRounds(roundsResponse.data.rounds);
//         if (roundsResponse.data.rounds.length > 0) {
//           setSelectedRoundId(roundsResponse.data.rounds[0].id);
//         }
//       } catch (err) {
//         setError("Failed to fetch rounds data");
//         console.error(err);
//       } finally {
//         setLoading((prev) => ({ ...prev, rounds: false }));
//       }
//     };

//     fetchData();
//   }, [eventId, user]);

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

//   const previewProject = async (
//     zipUrl: string,
//     name: string,
//     type: "team" | "participant"
//   ) => {
//     setLoading((prev) => ({ ...prev, preview: true }));
//     setError(null);
//     setSandpackFiles({} as SandpackFiles);
//     setCurrentPreview({ name, type, timestamp: Date.now() });

//     try {
//       const files = await unzipFromUrl(zipUrl);
//       const filesObj: SandpackFiles = {} as SandpackFiles;

//       // Process each file in the zip
//       for (const [filePath, content] of Object.entries(files)) {
//         const pathParts = filePath.split("/");
//         const cleanPath = "/" + pathParts.slice(1).join("/");

//         if (shouldExcludeFile(cleanPath)) continue;
//         if (!filePath.match(/\.(js|jsx|ts|tsx|css|scss|html|json|md|txt)$/i)) {
//           continue;
//         }

//         try {
//           const fileContent =
//             typeof content === "string"
//               ? content
//               : new TextDecoder().decode(content);
//           filesObj[cleanPath] = { code: fileContent, hidden: false };
//         } catch (error) {
//           console.warn(`Could not read file ${cleanPath}:`, error);
//         }
//       }

//       // Fallback if no files found
//       if (Object.keys(filesObj).length === 0) {
//         filesObj["/App.js"] = {
//           code: "// No previewable files found in the project",
//           hidden: false,
//         };
//       }

//       setSandpackFiles(filesObj);
//     } catch (error) {
//       console.error("Error previewing project:", error);
//       setError(
//         error instanceof Error ? error.message : "Failed to preview project"
//       );
//       setCurrentPreview(null);
//     } finally {
//       setLoading((prev) => ({ ...prev, preview: false }));
//     }
//   };

//   const handleScoreSubmission = async (
//     teamId: string,
//     marks: number,
//     remarks: string
//   ) => {
//     if (!selectedRoundId) {
//       setError("Please select a round first");
//       return;
//     }

//     try {
//       if (!user) return;

//       setLoading((prev) => ({ ...prev, scores: true }));
//       await axios.post("/api/panelist/score", {
//         teamId,
//         roundId: selectedRoundId,
//         marks,
//         remarks,
//         userId: user.id,
//       });

//       setTeams((prevTeams) =>
//         prevTeams.map((team) => {
//           if (team.id === teamId) {
//             const existingScoreIndex = team.scores.findIndex(
//               (score) => score.roundId === selectedRoundId
//             );

//             const newScore = {
//               id: "",
//               marks,
//               remarks,
//               roundId: selectedRoundId,
//             };

//             if (existingScoreIndex >= 0) {
//               const updatedScores = [...team.scores];
//               updatedScores[existingScoreIndex] = newScore;
//               return { ...team, scores: updatedScores };
//             }
//             return { ...team, scores: [...team.scores, newScore] };
//           }
//           return team;
//         })
//       );
//     } catch (error) {
//       setError("Failed to submit score");
//       console.error(error);
//     } finally {
//       setLoading((prev) => ({ ...prev, scores: false }));
//     }
//   };

//   const getTeamScoreForRound = (team: Team, roundId: string) => {
//     return team.scores.find((score) => score.roundId === roundId);
//   };

//   const handleTabChange = (tab: "code" | "preview") => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-blue-400">
//             Panelist Dashboard
//           </h1>
//           <p className="text-gray-400">Evaluate and score team projects</p>
//         </header>

//         {error && (
//           <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
//             <div className="flex items-center">
//               <span className="text-red-400 font-medium">Error:</span>
//               <span className="ml-2">{error}</span>
//               <button
//                 onClick={() => setError(null)}
//                 className="ml-auto text-red-300 hover:text-white"
//               >
//                 &times;
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 space-y-6">
//             {/* Rounds Selection */}
//             <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Select Round:
//               </label>
//               <div className="relative">
//                 {loading.rounds && (
//                   <div className="absolute inset-y-0 right-3 flex items-center">
//                     <Loader2Icon className="animate-spin h-4 w-4 text-blue-400" />
//                   </div>
//                 )}
//                 <select
//                   value={selectedRoundId ?? ""}
//                   onChange={(e) => setSelectedRoundId(e.target.value)}
//                   className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
//                   disabled={loading.rounds || rounds.length === 0}
//                 >
//                   <option value="" disabled>
//                     Select a round
//                   </option>
//                   {rounds.map((round) => (
//                     <option
//                       key={round.id}
//                       value={round.id}
//                       className="bg-gray-800"
//                     >
//                       {round.order}. {round.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Teams List */}
//             <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
//               <h2 className="text-xl font-semibold text-blue-400 mb-4">
//                 Teams
//               </h2>

//               {loading.teams ? (
//                 <div className="flex justify-center py-8">
//                   <Loader2Icon className="animate-spin h-8 w-8 text-blue-400" />
//                 </div>
//               ) : teams.length === 0 ? (
//                 <div className="text-center py-6 text-gray-400">
//                   No teams found for this event
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   {teams.map((team) => (
//                     <div
//                       key={team.id}
//                       className="bg-gray-700/50 rounded-lg overflow-hidden"
//                     >
//                       <div
//                         onClick={() => toggleTeamExpansion(team.id)}
//                         className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors"
//                       >
//                         <div className="flex items-center">
//                           {expandedTeams[team.id] ? (
//                             <ChevronDown className="h-5 w-5 text-blue-400 mr-2" />
//                           ) : (
//                             <ChevronRight className="h-5 w-5 text-blue-400 mr-2" />
//                           )}
//                           <span className="font-medium">{team.name}</span>
//                           <span className="ml-2 text-sm text-gray-400">
//                             ({team.participants.length} members)
//                           </span>
//                         </div>
//                         {team.storageUrl && (
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               previewProject(
//                                 team.storageUrl!,
//                                 team.name,
//                                 "team"
//                               );
//                             }}
//                             className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors flex items-center"
//                             disabled={loading.preview}
//                           >
//                             {loading.preview &&
//                             currentPreview?.name === team.name ? (
//                               <Loader2Icon className="animate-spin h-4 w-4 mr-1" />
//                             ) : (
//                               <FileText className="h-4 w-4 mr-1" />
//                             )}
//                             Preview
//                           </button>
//                         )}
//                       </div>

//                       {expandedTeams[team.id] && (
//                         <div className="p-4 pt-2 border-t border-gray-600">
//                           <div className="mb-4">
//                             <h3 className="text-sm font-medium text-gray-300 mb-2">
//                               Team Members
//                             </h3>
//                             <ul className="space-y-2">
//                               {team.participants.map((member) => (
//                                 <li
//                                   key={member.id}
//                                   className="flex items-center justify-between bg-gray-700 p-3 rounded-md"
//                                 >
//                                   <div>
//                                     <p className="font-medium">
//                                       {member.email}
//                                     </p>
//                                     {/* <p className="text-xs text-gray-400">
//                                      {member.storageUrl ? 'Project uploaded' : 'No project uploaded'}
//                                     </p> */}
//                                     <p className="text-xs text-gray-400">
//                                       {member.storageUrl
//                                         ? `Project uploaded`
//                                         : `No project uploaded`}
//                                     </p>
//                                   </div>
//                                   {member.storageUrl && (
//                                     <button
//                                       onClick={() =>
//                                         previewProject(
//                                           member.storageUrl!,
//                                           member.email,
//                                           "participant"
//                                         )
//                                       }
//                                       className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors flex items-center"
//                                       disabled={loading.preview}
//                                     >
//                                       {loading.preview &&
//                                       currentPreview?.name === member.email ? (
//                                         <Loader2Icon className="animate-spin h-4 w-4 mr-1" />
//                                       ) : (
//                                         <FileText className="h-4 w-4 mr-1" />
//                                       )}
//                                       Preview
//                                     </button>
//                                   )}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           {selectedRoundId && (
//                             <div className="mt-4">
//                               <h3 className="text-sm font-medium text-gray-300 mb-2">
//                                 Score for{" "}
//                                 {
//                                   rounds.find((r) => r.id === selectedRoundId)
//                                     ?.name
//                                 }
//                               </h3>
//                               <ScoreForm
//                                 teamId={team.id}
//                                 existingScore={getTeamScoreForRound(
//                                   team,
//                                   selectedRoundId
//                                 )}
//                                 onSubmit={handleScoreSubmission}
//                                 loading={loading.scores}
//                               />
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Preview Panel */}
//           <div className="lg:col-span-1">
//             <div className="bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
//               <div className="p-4 border-b border-gray-700">
//                 <h2 className="text-xl font-semibold text-blue-400">
//                   {currentPreview ? (
//                     <>
//                       Preview:{" "}
//                       <span className="text-white">{currentPreview.name}</span>
//                       <span className="text-sm text-gray-400 ml-2">
//                         ({currentPreview.type})
//                       </span>
//                     </>
//                   ) : (
//                     "Project Preview"
//                   )}
//                 </h2>
//               </div>

//               {loading.preview ? (
//                 <div className="flex-1 flex items-center justify-center">
//                   <div className="text-center">
//                     <Loader2Icon className="animate-spin h-10 w-10 text-blue-400 mx-auto mb-3" />
//                     <p className="text-gray-400">Loading project files...</p>
//                   </div>
//                 </div>
//               ) : Object.keys(sandpackFiles).length > 0 ? (
//                 <div className="flex-1 flex flex-col">
//                   <div className="flex border-b border-gray-700">
//                     <button
//                       onClick={() => handleTabChange("code")}
//                       className={`flex-1 py-2 text-sm font-medium ${
//                         activeTab === "code"
//                           ? "bg-gray-700 text-blue-400"
//                           : "text-gray-400 hover:bg-gray-700/50"
//                       }`}
//                     >
//                       Code Editor
//                     </button>
//                     <button
//                       onClick={() => handleTabChange("preview")}
//                       className={`flex-1 py-2 text-sm font-medium ${
//                         activeTab === "preview"
//                           ? "bg-gray-700 text-blue-400"
//                           : "text-gray-400 hover:bg-gray-700/50"
//                       }`}
//                     >
//                       Live Preview
//                     </button>
//                   </div>

//                   <div className="flex-1 overflow-hidden">
//                     <SandpackProvider
//                       key={
//                         currentPreview
//                           ? `${currentPreview.name}-${currentPreview.type}-${currentPreview.timestamp}`
//                           : "default"
//                       }
//                       files={sandpackFiles}
//                       template="react-ts"
//                       theme={nightOwl}
//                       customSetup={{
//                         entry: getEntryFile(),
//                       }}
//                       options={{
//                         externalResources: ["https://cdn.tailwindcss.com"],
//                         classes: {
//                           "sp-layout": "h-full",
//                           "sp-stack": "h-full",
//                         },
//                         activeFile: Object.keys(sandpackFiles)[0],
//                         recompileDelay: 500,
//                       }}
//                     >
//                       <SandpackLayout className="h-full">
//                         {activeTab === "code" ? (
//                           <div className="flex h-full">
//                             <div className="w-48 border-r border-gray-700">
//                               <SandpackFileExplorer
//                                 autoHiddenFiles={false}
//                                 style={{ height: "100%" }}
//                               />
//                             </div>
//                             <div className="flex-1">
//                               <SandpackCodeEditor
//                                 showLineNumbers
//                                 showTabs
//                                 closableTabs
//                                 style={{ height: "100%" }}
//                               />
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="h-full">
//                             <SandpackPreview
//                               showNavigator
//                               style={{ height: "100%", width: "100%" }}
//                               key={`preview-${currentPreview?.timestamp}`}
//                             />
//                           </div>
//                         )}
//                       </SandpackLayout>
//                     </SandpackProvider>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex-1 flex items-center justify-center p-6">
//                   <div className="text-center text-gray-500">
//                     <FileText className="h-10 w-10 mx-auto mb-3 text-gray-600" />
//                     <p>Select a project to preview</p>
//                     <p className="text-sm mt-1">
//                       Click on any &quot;Preview&quot; button to view the
//                       project
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ScoreForm({
//   teamId,
//   existingScore,
//   onSubmit,
//   loading,
// }: {
//   teamId: string;
//   existingScore?: {
//     marks: number;
//     remarks: string | null;
//   };
//   onSubmit: (teamId: string, marks: number, remarks: string) => void;
//   loading?: boolean;
// }) {
//   const [marks, setMarks] = useState(existingScore?.marks?.toString() || "");
//   const [remarks, setRemarks] = useState(existingScore?.remarks || "");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!marks) return;
//     await onSubmit(teamId, Number(marks), remarks);
//     setMarks("");
//     setRemarks("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-1">
//           Score (0-100)
//         </label>
//         <input
//           type="number"
//           min="0"
//           max="100"
//           required
//           value={marks}
//           onChange={(e) => setMarks(e.target.value)}
//           className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-1">
//           Remarks
//         </label>
//         <textarea
//           rows={3}
//           value={remarks}
//           onChange={(e) => setRemarks(e.target.value)}
//           className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
//       >
//         {loading ? (
//           <>
//             <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
//             Submitting...
//           </>
//         ) : existingScore ? (
//           "Update Score"
//         ) : (
//           "Submit Score"
//         )}
//       </button>
//     </form>
//   );
// }

//

"use client";

import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { unzipFromUrl } from "@/libs/unzip-utils";
import { useParams } from "next/navigation";
import { useUserDetails } from "@/hooks/useStore";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import {
  Loader2,
  Search,
  Trophy,
  Code2,
  Eye,
  Layout,
  CheckCircle2,
  Send,
  ChevronRight,
  FileText,
  MonitorPlay,
  Box,
  X,
  AlertCircle,
  User,
} from "lucide-react";

// --- TYPES ---
type UserProject = {
  id: string;
  email: string;
  isPublic: boolean;
  storageUrl: string | null;
  role: string;
};

type Score = {
  id: string;
  marks: number;
  remarks: string | null;
  roundId: string;
};

type Team = {
  id: string;
  name: string;
  storageUrl: string | null;
  participants: UserProject[];
  scores: Score[];
};

type Round = {
  id: string;
  name: string;
  order: number;
  eventId: string;
  maxScore?: number; // Added optional maxScore for UI polish
};

type SandpackFiles = Record<
  string,
  { code: string; hidden?: boolean; active?: boolean }
>;

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

export default function PanelistDashboard() {
  const { eventId } = useParams();
  const { user } = useUserDetails();

  // --- DATA STATE ---
  const [teams, setTeams] = useState<Team[]>([]);
  const [rounds, setRounds] = useState<Round[]>([]);

  // --- UI STATE ---
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // --- SELECTION STATE ---
  const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null);
  const [activeTeamId, setActiveTeamId] = useState<string | null>(null);

  // Editor State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"code" | "preview">("code");
  const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>({});

  // Scoring State
  const [scoreForm, setScoreForm] = useState({ marks: "", remarks: "" });
  const [isSubmittingScore, setIsSubmittingScore] = useState(false);

  // --- LOGIC: File Exclusion (Your original logic) ---
  const shouldExcludeFile = (filePath: string): boolean => {
    const lowerCasePath = filePath.toLowerCase();
    return EXCLUDED_PATHS.some(
      (excludedPath) =>
        lowerCasePath.includes(excludedPath.toLowerCase()) ||
        lowerCasePath.startsWith(`/${excludedPath.toLowerCase()}`)
    );
  };

  // 1. Fetch Initial Data
  useEffect(() => {
    const initDashboard = async () => {
      if (!user || !eventId) return;
      try {
        setLoading(true);
        // Parallel fetching for speed
        const [teamsRes, roundsRes] = await Promise.all([
          axios.post("/api/panelist", { eventId }),
          axios.get(`/api/panelist/round?eventId=${eventId}&userId=${user.id}`),
        ]);

        setTeams(teamsRes.data.teams);
        setRounds(roundsRes.data.rounds);

        if (roundsRes.data.rounds.length > 0) {
          setSelectedRoundId(roundsRes.data.rounds[0].id);
        }
      } catch (err) {
        console.error("Dashboard init error:", err);
      } finally {
        setLoading(false);
      }
    };
    initDashboard();
  }, [eventId, user]);

  // 2. Handle Team Selection
  const handleTeamSelect = (team: Team) => {
    setActiveTeamId(team.id);
    setIsPreviewOpen(false); // Reset preview to ensure clean state
    setSandpackFiles({});

    // Pre-fill Score Form with existing data if available
    const existingScore = team.scores.find(
      (s) => s.roundId === selectedRoundId
    );
    setScoreForm({
      marks: existingScore ? String(existingScore.marks) : "",
      remarks: existingScore?.remarks || "",
    });
  };

  // 3. Load Preview Logic (YOUR EXACT LOGIC PRESERVED)
  const handleLoadPreview = async () => {
    if (!activeTeamId) return;
    const team = teams.find((t) => t.id === activeTeamId);
    if (!team) return;

    setPreviewLoading(true);
    setIsPreviewOpen(true);

    // Determine ZIP URL (Team preferred, fallback to first participant)
    const projectUrl =
      team.storageUrl ||
      team.participants.find((p) => p.storageUrl)?.storageUrl;

    if (projectUrl) {
      try {
        const files = await unzipFromUrl(projectUrl);
        const filesObj: SandpackFiles = {};

        for (const [filePath, content] of Object.entries(files)) {
          const pathParts = filePath.split("/");
          const cleanPath = "/" + pathParts.slice(1).join("/");

          if (shouldExcludeFile(cleanPath)) continue;
          if (
            !filePath.match(/\.(js|jsx|ts|tsx|css|scss|html|json|md|txt)$/i)
          ) {
            continue;
          }

          try {
            const fileContent =
              typeof content === "string"
                ? content
                : new TextDecoder().decode(content);
            filesObj[cleanPath] = { code: fileContent, hidden: false };
          } catch (error) {
            console.warn(`Could not read file ${cleanPath}:`, error);
          }
        }

        if (Object.keys(filesObj).length === 0) {
          filesObj["/App.js"] = {
            code: "// No previewable files found in the project",
            hidden: false,
          };
        }

        setSandpackFiles(filesObj);
      } catch (error) {
        console.error("Error previewing project:", error);
        alert("Failed to load project. The zip file might be corrupted.");
        setIsPreviewOpen(false);
      } finally {
        setPreviewLoading(false);
      }
    } else {
      setPreviewLoading(false);
    }
  };

  // 4. Submit Score
  const handleScoreSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !activeTeamId || !selectedRoundId) return;

    setIsSubmittingScore(true);
    try {
      await axios.post("/api/panelist/score", {
        teamId: activeTeamId,
        roundId: selectedRoundId,
        marks: Number(scoreForm.marks),
        remarks: scoreForm.remarks,
        userId: user.id,
      });

      // Optimistic Update locally
      setTeams((prev) =>
        prev.map((t) => {
          if (t.id === activeTeamId) {
            // Remove old score for this round if exists
            const otherScores = t.scores.filter(
              (s) => s.roundId !== selectedRoundId
            );
            return {
              ...t,
              scores: [
                ...otherScores,
                {
                  id: "temp",
                  marks: Number(scoreForm.marks),
                  remarks: scoreForm.remarks,
                  roundId: selectedRoundId,
                },
              ],
            };
          }
          return t;
        })
      );
    } catch (error) {
      console.error(error);
      alert("Failed to submit score.");
    } finally {
      setIsSubmittingScore(false);
    }
  };

  // --- Derived State ---
  const activeRound = rounds.find((r) => r.id === selectedRoundId);
  const activeTeam = teams.find((t) => t.id === activeTeamId);
  const filteredTeams = useMemo(() => {
    return teams.filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [teams, searchQuery]);

  const hasProjectSubmission = (team: Team) => {
    return team.storageUrl || team.participants.some((p) => p.storageUrl);
  };

  // --- Entry File Logic (Your Logic) ---
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

  if (loading) {
    return (
      <div className="h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-zinc-950 text-zinc-500">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
        <p className="text-sm font-medium animate-pulse">
          Loading Judging Console...
        </p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-70px)] w-full bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30 flex flex-col overflow-hidden">
      {/* --- HEADER --- */}
      <header className="h-14 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between px-4 shrink-0 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <Layout className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">
              Panelist Console
            </h1>
          </div>
        </div>

        {/* Round Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-md no-scrollbar">
          {rounds.map((round) => (
            <button
              key={round.id}
              onClick={() => {
                setSelectedRoundId(round.id);
                setActiveTeamId(null); // Deselect team on round change to avoid confusion
                setIsPreviewOpen(false);
              }}
              className={`px-3 py-1 text-[11px] font-medium rounded-full transition-all whitespace-nowrap border ${
                selectedRoundId === round.id
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
              }`}
            >
              R{round.order}: {round.name}
            </button>
          ))}
        </div>
      </header>

      {/* --- MAIN CONTENT (FLEX ROW) --- */}
      <div className="flex-1 flex overflow-hidden w-full relative">
        {/* 1. LEFT SIDEBAR: TEAMS (Fixed Width) */}
        <div className="w-72 border-r border-zinc-800 flex flex-col bg-zinc-900/30 shrink-0">
          {/* Search */}
          <div className="p-3 border-b border-zinc-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:ring-1 focus:ring-indigo-500 outline-none placeholder-zinc-600"
              />
            </div>
          </div>

          {/* Team List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
            {filteredTeams.map((team) => {
              const score = team.scores.find(
                (s) => s.roundId === selectedRoundId
              );
              const isSelected = activeTeamId === team.id;
              const hasProject = hasProjectSubmission(team);

              return (
                <div
                  key={team.id}
                  onClick={() => handleTeamSelect(team)}
                  className={`group cursor-pointer w-full p-3 rounded-lg border transition-all ${
                    isSelected
                      ? "bg-indigo-500/10 border-indigo-500/40"
                      : "bg-transparent border-transparent hover:bg-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span
                      className={`font-semibold text-sm truncate ${
                        isSelected ? "text-white" : "text-zinc-400"
                      }`}
                    >
                      {team.name}
                    </span>
                    {score && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>

                  {/* Participants (Compact) */}
                  {/* <div className="flex flex-wrap gap-1 mb-2">
                    {team.participants.slice(0, 3).map((p) => (
                      <span
                        key={p.id}
                        className="text-[10px] text-zinc-600 bg-zinc-950 px-1.5 rounded border border-zinc-800/50 truncate max-w-[80px]"
                      >
                        {p.email.split("@")[0]}
                      </span>
                    ))}
                    {team.participants.length > 3 && (
                      <span className="text-[10px] text-zinc-600">
                        +{team.participants.length - 3}
                      </span>
                    )}
                  </div> */}

                  {/* Participants */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {team.participants.slice(0, 3).map((p) => (
                      <span
                        key={p.id}
                        className="text-xs font-medium text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800 truncate max-w-[110px]"
                      >
                        {p.email.split("@")[0]}
                      </span>
                    ))}
                    {team.participants.length > 3 && (
                      <span className="text-xs font-medium text-zinc-500 flex items-center px-1">
                        +{team.participants.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    {hasProject ? (
                      <span className="flex items-center gap-1 text-[10px] text-indigo-400">
                        <FileText className="w-3 h-3" /> Code Ready
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] text-zinc-600">
                        <AlertCircle className="w-3 h-3" /> No Code
                      </span>
                    )}
                    {isSelected && (
                      <ChevronRight className="w-3 h-3 text-indigo-500" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. MIDDLE: WORKSPACE (Flex-1, min-w-0) */}
        <div className="flex-1 flex flex-col bg-zinc-950 min-w-0 relative overflow-hidden">
          {activeTeam ? (
            <>
              {/* Toolbar */}
              <div className="h-12 border-b border-zinc-800 bg-zinc-900/20 flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                  <h2 className="text-sm font-bold text-white truncate">
                    {activeTeam.name}
                  </h2>
                  {isPreviewOpen && (
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] rounded border border-indigo-500/30 whitespace-nowrap">
                      Sandbox Active
                    </span>
                  )}
                </div>

                {/* View Toggles (Only visible when preview is open) */}
                {isPreviewOpen ? (
                  <div className="flex items-center gap-3">
                    <div className="flex bg-zinc-900 p-0.5 rounded border border-zinc-800">
                      <button
                        onClick={() => setViewMode("code")}
                        className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                          viewMode === "code"
                            ? "bg-zinc-800 text-white shadow-sm"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        Code
                      </button>
                      <button
                        onClick={() => setViewMode("preview")}
                        className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                          viewMode === "preview"
                            ? "bg-zinc-800 text-white shadow-sm"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        Preview
                      </button>
                    </div>
                    <div className="w-px h-4 bg-zinc-800" />
                    <button
                      onClick={() => setIsPreviewOpen(false)}
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="Close Preview"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : null}
              </div>

              {/* Workspace Content */}
              <div className="flex-1 relative overflow-hidden bg-zinc-900/10">
                {isPreviewOpen ? (
                  /* SANDPACK CONTAINER */
                  <div className="absolute inset-0 flex flex-col">
                    {/* Loading Overlay */}
                    {previewLoading && (
                      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
                        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
                        <p className="text-xs text-zinc-400">
                          Parsing project files...
                        </p>
                      </div>
                    )}

                    {/* Sandpack Instance - Logic Unchanged */}
                    <SandpackProvider
                      key={`${activeTeam.id}-${Date.now()}`}
                      files={sandpackFiles}
                      template="react-ts"
                      theme={zincTheme}
                      customSetup={{
                        entry: getEntryFile(),
                      }}
                      options={{
                        externalResources: ["https://cdn.tailwindcss.com"],
                        classes: {
                          "sp-layout": "h-full",
                          "sp-stack": "h-full",
                        },
                        activeFile: Object.keys(sandpackFiles)[0],
                        recompileDelay: 500,
                      }}
                    >
                      <SandpackLayout className="!h-full !bg-transparent !border-none !rounded-none ">
                        {viewMode === "code" ? (
                          <>
                            <SandpackFileExplorer className="!h-full !bg-zinc-950/50 !border-r !border-zinc-800 !w-52 hidden md:flex" />
                            <SandpackCodeEditor
                              className="!h-full !bg-zinc-900/20 !flex-1"
                              showTabs
                              showLineNumbers
                              readOnly // Read only for panelists
                            />
                          </>
                        ) : (
                          <SandpackPreview
                            className=" !bg-white "
                            showOpenInCodeSandbox={false}
                            showNavigator
                            style={{ height: "100vh", width: "100vw" }}
                          />
                        )}
                      </SandpackLayout>
                    </SandpackProvider>
                  </div>
                ) : (
                  /* TEAM OVERVIEW STATE (Initial View) */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center justify-center mb-4">
                      <Box className="w-8 h-8 text-indigo-500" />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-1">
                      Team {activeTeam.name}
                    </h2>
                    <div className="flex flex-col gap-1 text-sm text-zinc-500 mb-6">
                      <p>{activeTeam.participants.length} Participants</p>
                      <p className="text-xs opacity-70">
                        {activeTeam.participants
                          .map((p) => p.email.split("@")[0])
                          .join(", ")}
                      </p>
                    </div>

                    {hasProjectSubmission(activeTeam) ? (
                      <button
                        onClick={handleLoadPreview}
                        className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-indigo-900/20 flex items-center gap-2"
                      >
                        <MonitorPlay className="w-4 h-4" />
                        Launch Preview Environment
                      </button>
                    ) : (
                      <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 text-xs flex items-center gap-2">
                        <AlertCircle className="w-3 h-3" />
                        No project submission available.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* EMPTY STATE (No Selection) */
            <div className="flex-1 flex flex-col items-center justify-center text-zinc-600">
              <Layout className="w-12 h-12 mb-3 opacity-20" />
              <p className="text-sm font-medium">Select a Team to Evaluate</p>
            </div>
          )}
        </div>

        {/* 3. RIGHT SIDEBAR: SCORING (Fixed Width) */}
        {activeTeam && !isPreviewOpen && (
          <div className="w-80 border-l border-zinc-800 bg-zinc-900/40 flex flex-col shrink-0">
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/60">
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
                <Trophy className="w-4 h-4 text-indigo-500" />
                Evaluation
              </div>
              <div className="mt-1 text-[10px] text-zinc-500 flex justify-between">
                <span>Round {activeRound?.order}</span>
                <span>Max Score: {activeRound?.maxScore || 100}</span>
              </div>
            </div>

            <form
              onSubmit={handleScoreSubmit}
              className="flex-1 p-5 flex flex-col gap-5 overflow-y-auto"
            >
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Score Awarded
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max={activeRound?.maxScore || 100}
                    required
                    value={scoreForm.marks}
                    onChange={(e) =>
                      setScoreForm({ ...scoreForm, marks: e.target.value })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 text-3xl font-mono text-white p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-center"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Feedback / Remarks
                </label>
                <textarea
                  value={scoreForm.remarks}
                  onChange={(e) =>
                    setScoreForm({ ...scoreForm, remarks: e.target.value })
                  }
                  className="w-full h-full min-h-[150px] bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none placeholder-zinc-700"
                  placeholder="Write constructive feedback..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingScore || !scoreForm.marks}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed mt-auto"
              >
                {isSubmittingScore ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Submit Evaluation
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
