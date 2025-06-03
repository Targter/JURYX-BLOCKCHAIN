// 'use client'

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { unzipFromUrl } from '@/libs/unzip-utils'
// import { WebContainer ,FileSystemTree} from '@webcontainer/api'
// import { useParams } from 'next/navigation'
// import { useUserDetails } from '@/hooks/useStore'

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
//   projectUrl: string | null; // URL associated with the team project
//   participants: UserProject[]; // Team members
//   scores:Score[];
// };
// // 
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
// // 
// type FileNode = {
//   type: 'file';
//   name: string;
//   path: string;
//   // file:File;
//   content:Uint8Array | string;
// };

// type FolderNode = {
//   type: 'folder';
//   name: string;
//   path: string;
//   children: TreeNode[];
// };

// type TreeNode = FileNode | FolderNode;
// type FileContent = {
//   [path: string]: Uint8Array | string;
// };

// // Type for the file system structure for WebContainer
// type FileSystemStructure = {
//   [name: string]: {
//     file?: {
//       contents: Uint8Array | string;
//     };
//     directory?: FileSystemStructure;
//   };
// };
// export default function PanelistDashboard() {
  
//   const {eventId} = useParams();
//   const {user} = useUserDetails(); 
//   // const [users, setUsers] = useState<UserProject[]>([]);
//   const [teams, setTeams] = useState<Team[]>([]); 
//   const [loading, setLoading] = useState(false);
//   const [serverUrl, setServerUrl] = useState<string | null>(null);
//   const [webContainerInstance, setWebContainerInstance] = useState<WebContainer | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null);

//   // Convert flat file paths to hierarchical structure
//   // const buildFileTree = (files: Record<string, any>): TreeNode[] => {
//   //   const root: FolderNode = {
//   //     type: 'folder',
//   //     name: '',
//   //     path: '',
//   //     children: []
//   //   };

//   //   Object.entries(files).forEach(([filePath]) => {
//   //     const parts = filePath.split('/');
//   //     let current = root;

//   //     parts.forEach((part, index) => {
//   //       const isFile = index === parts.length - 1;
//   //       const currentPath = parts.slice(0, index + 1).join('/');

//   //       if (isFile) {
//   //         current.children.push({
//   //           type: 'file',
//   //           name: part,
//   //           path: currentPath
//   //         });
//   //       } else {
//   //         let folder = current.children.find(
//   //           child => child.type === 'folder' && child.name === part
//   //         ) as FolderNode | undefined;

//   //         if (!folder) {
//   //           folder = {
//   //             type: 'folder',
//   //             name: part,
//   //             path: currentPath,
//   //             children: []
//   //           };
//   //           current.children.push(folder);
//   //         }
//   //         current = folder;
//   //       }
//   //     });
//   //   });

//   //   // Remove the empty root and return immediate children
//   //   return root.children;
//   // };


//   useEffect(() => {
//     console.log("Participant Details calling......")
//     async function fetchUsers() {
//       const { data } = await axios.post('/api/panelist',{eventId});
//       setTeams(data.teams);
//       console.log("AllTeam:",data)
//     }
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     return () => {
//       webContainerInstance?.teardown();
//     };
//   }, [webContainerInstance]);

//  const buildFileTree = (files: Record<string, Uint8Array | string>): FolderNode => {
//     const root: FolderNode = {
//       type: 'folder',
//       name: '',
//       path: '',
//       children: []
//     };

//     Object.entries(files).forEach(([filePath, content]) => {
//       const parts = filePath.split('/');
//       let current = root;

//       parts.forEach((part, index) => {
//         const isFile = index === parts.length - 1;
//         const currentPath = parts.slice(0, index + 1).join('/');

//         if (isFile) {
//           current.children.push({
//             type: 'file',
//             name: part,
//             path: currentPath,
//             content
//           });
//         } else {
//           let folder = current.children.find(
//             child => child.type === 'folder' && child.name === part
//           ) as FolderNode | undefined;

//           if (!folder) {
//             folder = {
//               type: 'folder',
//               name: part,
//               path: currentPath,
//               children: []
//             };
//             current.children.push(folder);
//           }
//           current = folder;
//         }
//       });
//     });

//     return root;
//   };

//   const convertTreeToFileSystemTree = (node: FolderNode): FileSystemTree => {
//     const result: FileSystemTree = {};

//     for (const child of node.children) {
//       if (child.type === 'folder') {
//         result[child.name] = {
//           directory: convertTreeToFileSystemTree(child)
//         };
//       } else {
//         result[child.name] = {
//           file: {
//             contents: child.content
//           }
//         };
//       }
//     }

//     return result;
//   };

//   const previewProject = async (zipUrl: string) => {
//     setLoading(true);
//     setError(null);
//     setServerUrl(null);

//     try {
//       // 1. Unzip the project
//       const files = await unzipFromUrl(zipUrl);
//       console.log("Unzipped files:", files);

//       // 2. Build file tree structure
//       const fileTree = buildFileTree(files);
//       console.log('File tree structure:', fileTree);

//       // 3. Convert to WebContainer file system format
//       const fileSystem = convertTreeToFileSystemTree(fileTree);
//       console.log("File system for WebContainer:", fileSystem);

//       // 4. Boot WebContainer
//       console.log("Booting WebContainer...");
//       const webContainer = await WebContainer.boot();
//       setWebContainerInstance(webContainer);
//       console.log(fileSystem)
//       await webContainer.mount(fileSystem);
//       console.log("Mounted project to WebContainer");

//       const install = await webContainer.spawn('npm', ['install']);
//       install.output.pipeTo(new WritableStream({
//         write(data) {
//           console.log('📦 npm install:', data);
//         },
//       }));
//       await install.exit;

//       console.log('✅ Dependencies installed');

//       const server = await webContainer.spawn('npm', ['run', 'dev']);
//       server.output.pipeTo(new WritableStream({
//         write(data) {
//           console.log('🚀 Dev Server:', data);
//         },
//       }));

//       webContainer.on('server-ready', (port, url) => {
//         console.log(`🌐 Dev server ready on port ${port}, url: ${url}`);
//         setServerUrl(url);
//       });

//     } catch (error) {
//       console.error("Error previewing project:", error);
//       setError(error instanceof Error ? error.message : 'Failed to preview project');
//       webContainerInstance?.teardown();
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 

//   // const [teamScores, setTeamScores] = useState<Record<string, { score: number; remarks: string }>>({});

// // Update state on score or remarks change
// // const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>, teamId: string) => {
// //   // setTeamScores(prevState => ({
// //   //   ...prevState,
// //   //   [teamId]: { ...prevState[teamId], score: Number(e.target.value) }
// //   // }));
// // };

// // const handleRemarksChange = (e: React.ChangeEvent<HTMLTextAreaElement>, teamId: string) => {
// //   // setTeamScores(prevState => ({
// //   //   ...prevState,
// //   //   [teamId]: { ...prevState[teamId], remarks: e.target.value }
// //   // }));
// // };

// const handleScoreSubmission = async (teamId: string, marks: number, remarks: string) => {
//   if (!selectedRoundId) {
//     setError('Please select a round first');
//     return;
//   }

//   try {
//     if(!user){
//       return
//     }
//     const score = await axios.post('/api/panelist/score', {
//       teamId,
//       roundId: selectedRoundId,
//       marks,
//       remarks,
//       userId:user.id
//     });

//     console.log("Team Score:",score)
//     // Update local state
//     setTeams(prevTeams => prevTeams.map(team => {
//       if (team.id === teamId) {
//         const existingScoreIndex = team.scores.findIndex(
//           score => score.roundId === selectedRoundId
//         );

//         const newScore = {
//           id: '', // Will be filled by the server
//           marks,
//           remarks,
//           roundId: selectedRoundId
//         };

//         if (existingScoreIndex >= 0) {
//           const updatedScores = [...team.scores];
//           updatedScores[existingScoreIndex] = newScore;
//           return { ...team, scores: updatedScores };
//         } else {
//           return { ...team, scores: [...team.scores, newScore] };
//         }
//       }
//       return team;
//     }));
//   } catch (error) {
//     setError('Failed to submit score');
//     console.error(error);
//   }
// };

// const getTeamScoreForRound = (team: Team, roundId: string) => {
//   return team.scores.find(score => score.roundId === roundId);
// };

// useEffect(() => {
//   async function fetchData() {
//     try {
//       setLoading(true);
//       if(!user) {
//         return ;
//       }
//       const [ roundsResponse] = await Promise.all([
//         // axios.get(`/api/panelist/teams?eventId=${eventId}&userId=${user.id}`),
//         axios.get(`/api/panelist/round?eventId=${eventId}&userId=${user.id}`)
//       ]);
//       console.log("roundResult:",roundsResponse)
      
//       // setTeams(teamsResponse.data.teams);
//       setRounds(roundsResponse.data.rounds);
      
//       // Select the first round by default if available
//       if (roundsResponse.data.rounds.length > 0) {
//         setSelectedRoundId(roundsResponse.data.rounds[0].id);
//       }
//     } catch (err) {
//       setError('Failed to fetch data');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchData();
// }, [eventId]);
// // 
// const [rounds, setRounds] = useState<Round[]>([]);

// // useEffect(() => {
// //   const fetchRounds = async () => {
// //     const { data } = await axios.post('/api/panelist/round', { eventId });
// //     setRounds(data.rounds);
// //   };
// //   fetchRounds();
// // }, [eventId]);

//   return (
//     <div className="p-8">
//     <h1 className="text-3xl font-bold mb-6">Panelist Dashboard</h1>
    
//     {error && (
//       <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
//         Error: {error}
//       </div>
//     )}

//     {serverUrl && (
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3">Project Preview</h2>
//         <iframe
//           src={serverUrl}
//           className="w-full h-[600px] border rounded-lg shadow-lg"
//           sandbox="allow-scripts allow-same-origin"
//           title="Project Preview"
//         />
//         <p className="mt-2 text-sm text-gray-500">
//           Preview URL: <a href={serverUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
//             {serverUrl}
//           </a>
//         </p>
//       </div>
//     )}

//     <div className="mb-6">
//       <label className="block font-medium mb-2">Select Round:</label>
//       <select
//         value={selectedRoundId ?? ''}
//         onChange={(e) => setSelectedRoundId(e.target.value)}
//         className="border px-3 py-2 rounded w-full text-white"
//         disabled={loading || rounds.length === 0}
//       >
//         <option value="" disabled>Select a round</option>
//         {rounds.map(round => (
//           <option key={round.id} value={round.id} className='text-black'>
//             {round.order}. {round.name}
//           </option>
//         ))}
//       </select>
//     </div>

//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Teams</h2>
//       {loading ? (
//         <p className="text-gray-500">Loading teams...</p>
//       ) : teams.length === 0 ? (
//         <p className="text-gray-500">No teams found for this event</p>
//       ) : (
//         teams.map(team => (
//           <div key={team.id} className="border p-4 rounded-lg shadow">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="font-medium">{team.name}</p>
//                 <p className="text-sm text-gray-600">
//                   Team Project: {team.projectUrl ? "Available" : "Not Uploaded"}
//                 </p>
//               </div>
//               {team.projectUrl && (
//                 <button
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
//                   onClick={() => previewProject(team.projectUrl!)}
//                   disabled={loading}
//                 >
//                   {loading ? 'Loading Preview...' : 'Preview'}
//                 </button>
//               )}
//             </div>

//             <div className="mt-4">
//               <h3 className="font-medium">Team Members</h3>
//               <ul className="space-y-2">
//                 {team.participants.map(member => (
//                   <li key={member.id} className="border p-2 rounded-md flex justify-between">
//                     <div>
//                       <p className="font-medium">{member.email}</p>
//                       <p className="text-sm text-gray-600">
//                         Project: {member.storageUrl ? "Available" : "Not Uploaded"}
//                       </p>
//                     </div>
//                     {member.storageUrl && (
//                       <button
//                         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
//                         onClick={() => previewProject(member.storageUrl!)}
//                         disabled={loading}
//                       >
//                         {loading ? 'Loading Preview...' : 'Preview'}
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {selectedRoundId && (
//               <div className="mt-4">
//                 <h3 className="font-medium">Score for {rounds.find(r => r.id === selectedRoundId)?.name}</h3>
//                 <ScoreForm
//                   teamId={team.id}
//                   existingScore={getTeamScoreForRound(team, selectedRoundId)}
//                   onSubmit={handleScoreSubmission}
//                 />
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   </div>
// );
// }

// function ScoreForm({
// teamId,
// existingScore,
// onSubmit
// }: {
// teamId: string;
// existingScore?: {
//   marks: number;
//   remarks: string | null;
// };
// onSubmit: (teamId: string, marks: number, remarks: string) => void;
// }) {
// const [marks, setMarks] = useState(existingScore?.marks?.toString() || '');
// const [remarks, setRemarks] = useState(existingScore?.remarks || '');
// const [isSubmitting, setIsSubmitting] = useState(false);

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!marks) return;
//   setIsSubmitting(true);
//   try {
//     await onSubmit(teamId, Number(marks), remarks);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

// return (
//   <form onSubmit={handleSubmit} className="space-y-3">
//     <div>
//       <label className="block text-sm font-medium mb-1">Score (0-100)</label>
//       <input
//         type="number"
//         min="0"
//         max="100"
//         required
//         value={marks}
//         onChange={(e) => setMarks(e.target.value)}
//         className="w-full p-2 border rounded-lg"
//       />
//     </div>
//     <div>
//       <label className="block text-sm font-medium mb-1">Remarks</label>
//       <textarea
//         rows={3}
//         value={remarks}
//         onChange={(e) => setRemarks(e.target.value)}
//         className="w-full p-2 border rounded-lg"
//       />
//     </div>
//     <button
//       type="submit"
//       disabled={isSubmitting}
//       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
//     >
//       {isSubmitting ? 'Submitting...' : existingScore ? 'Update Score' : 'Submit Score'}
//     </button>
//   </form>
// );
// }
'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { unzipFromUrl } from '@/libs/unzip-utils'
import { useParams } from 'next/navigation'
import { useUserDetails } from '@/hooks/useStore'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { Loader2Icon, ChevronRight, ChevronDown, FileText } from "lucide-react";
import Lookup from '@/component/Lookup'

// Types remain the same as before
type UserProject = {
  id: string;
  email: string;
  isPublic: boolean;
  storageUrl: string | null;
  role: string;
};

type Team = {
  id: string;
  name: string;
  projectUrl: string | null;
  participants: UserProject[];
  scores: Score[];
};

type Score = {
  id: string;
  marks: number;
  remarks: string | null;
  roundId: string;
};

type Round = {
  id: string;
  name: string;
  order: number;
  eventId: string;
};

type SandpackFiles = Record<string, { code: string; hidden?: boolean }>;

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
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState({
    teams: false,
    rounds: false,
    preview: false,
    scores:false,
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null);
  const [sandpackFiles, setSandpackFiles] = useState<SandpackFiles>(Lookup.DEFAULT_FILE);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentPreview, setCurrentPreview] = useState<{ 
    name: string; 
    type: 'team' | 'participant'; 
    timestamp: number 
  } | null>(null);
  const [expandedTeams, setExpandedTeams] = useState<Record<string, boolean>>({});

  const toggleTeamExpansion = (teamId: string) => {
    setExpandedTeams(prev => ({
      ...prev,
      [teamId]: !prev[teamId]
    }));
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
    const fetchUsers = async () => {
      try {
        setLoading(prev => ({ ...prev, teams: true }));
        const { data } = await axios.post('/api/panelist', { eventId });
        setTeams(data.teams);
        
        // Initialize expanded state for each team
        const initialExpandedState = data.teams.reduce((acc: Record<string, boolean>, team: Team) => {
          acc[team.id] = false;
          return acc;
        }, {} as Record<string, boolean> // Explicit type assertion
);
        setExpandedTeams(initialExpandedState);
      } catch (err) {
        setError('Failed to load teams');
        console.error(err); 
      } finally {
        setLoading(prev => ({ ...prev, teams: false }));
      }
    };
    fetchUsers();
  }, [eventId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(prev => ({ ...prev, rounds: true }));
        if (!user) return;
        
        const [roundsResponse] = await Promise.all([
          axios.get(`/api/panelist/round?eventId=${eventId}&userId=${user.id}`)
        ]);
        
        setRounds(roundsResponse.data.rounds);
        if (roundsResponse.data.rounds.length > 0) {
          setSelectedRoundId(roundsResponse.data.rounds[0].id);
        }
      } catch (err) {
        setError('Failed to fetch rounds data');
        console.error(err);
      } finally {
        setLoading(prev => ({ ...prev, rounds: false }));
      }
    };

    fetchData();
  }, [eventId, user]);

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

  const previewProject = async (zipUrl: string, name: string, type: 'team' | 'participant') => {
    setLoading(prev => ({ ...prev, preview: true }));
    setError(null);
    setSandpackFiles({} as SandpackFiles);
    setCurrentPreview({ name, type, timestamp: Date.now() });

    try {
      const files = await unzipFromUrl(zipUrl);
      const filesObj: SandpackFiles = {} as SandpackFiles;

      // Process each file in the zip
      for (const [filePath, content] of Object.entries(files)) {
        const pathParts = filePath.split('/');
        const cleanPath = '/' + pathParts.slice(1).join('/');

        if (shouldExcludeFile(cleanPath)) continue;
        if (!filePath.match(/\.(js|jsx|ts|tsx|css|scss|html|json|md|txt)$/i)) {
          continue;
        }

        try {
          const fileContent = typeof content === 'string' ? content : new TextDecoder().decode(content);
          filesObj[cleanPath] = { code: fileContent, hidden: false };
        } catch (error) {
          console.warn(`Could not read file ${cleanPath}:`, error);
        }
      }

      // Fallback if no files found
      if (Object.keys(filesObj).length === 0) {
        filesObj['/App.js'] = {
          code: "// No previewable files found in the project",
          hidden: false
        };
      }

      setSandpackFiles(filesObj);
    } catch (error) {
      console.error("Error previewing project:", error);
      setError(error instanceof Error ? error.message : 'Failed to preview project');
      setCurrentPreview(null);
    } finally {
      setLoading(prev => ({ ...prev, preview: false }));
    }
  };

  const handleScoreSubmission = async (teamId: string, marks: number, remarks: string) => {
    if (!selectedRoundId) {
      setError('Please select a round first');
      return;
    }

    try {
      if (!user) return;
      
      setLoading(prev => ({ ...prev, scores: true }));
      await axios.post('/api/panelist/score', {
        teamId,
        roundId: selectedRoundId,
        marks,
        remarks,
        userId: user.id
      });

      setTeams(prevTeams => prevTeams.map(team => {
        if (team.id === teamId) {
          const existingScoreIndex = team.scores.findIndex(
            score => score.roundId === selectedRoundId
          );

          const newScore = { id: '', marks, remarks, roundId: selectedRoundId };

          if (existingScoreIndex >= 0) {
            const updatedScores = [...team.scores];
            updatedScores[existingScoreIndex] = newScore;
            return { ...team, scores: updatedScores };
          }
          return { ...team, scores: [...team.scores, newScore] };
        }
        return team;
      }));
    } catch (error) {
      setError('Failed to submit score');
      console.error(error);
    } finally {
      setLoading(prev => ({ ...prev, scores: false }));
    }
  };

  const getTeamScoreForRound = (team: Team, roundId: string) => {
    return team.scores.find(score => score.roundId === roundId);
  };

  const handleTabChange = (tab: "code" | "preview") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400">Panelist Dashboard</h1>
          <p className="text-gray-400">Evaluate and score team projects</p>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
            <div className="flex items-center">
              <span className="text-red-400 font-medium">Error:</span>
              <span className="ml-2">{error}</span>
              <button 
                onClick={() => setError(null)}
                className="ml-auto text-red-300 hover:text-white"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Rounds Selection */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <label className="block text-sm font-medium text-gray-300 mb-2">Select Round:</label>
              <div className="relative">
                {loading.rounds && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <Loader2Icon className="animate-spin h-4 w-4 text-blue-400" />
                  </div>
                )}
                <select
                  value={selectedRoundId ?? ''}
                  onChange={(e) => setSelectedRoundId(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
                  disabled={loading.rounds || rounds.length === 0}
                >
                  <option value="" disabled>Select a round</option>
                  {rounds.map(round => (
                    <option key={round.id} value={round.id} className="bg-gray-800">
                      {round.order}. {round.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Teams List */}
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold text-blue-400 mb-4">Teams</h2>
              
              {loading.teams ? (
                <div className="flex justify-center py-8">
                  <Loader2Icon className="animate-spin h-8 w-8 text-blue-400" />
                </div>
              ) : teams.length === 0 ? (
                <div className="text-center py-6 text-gray-400">
                  No teams found for this event
                </div>
              ) : (
                <div className="space-y-3">
                  {teams.map(team => (
                    <div key={team.id} className="bg-gray-700/50 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleTeamExpansion(team.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center">
                          {expandedTeams[team.id] ? (
                            <ChevronDown className="h-5 w-5 text-blue-400 mr-2" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-blue-400 mr-2" />
                          )}
                          <span className="font-medium">{team.name}</span>
                          <span className="ml-2 text-sm text-gray-400">
                            ({team.participants.length} members)
                          </span>
                        </div>
                        {team.projectUrl && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              previewProject(team.projectUrl!, team.name, 'team');
                            }}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors flex items-center"
                            disabled={loading.preview}
                          >
                            {loading.preview && currentPreview?.name === team.name ? (
                              <Loader2Icon className="animate-spin h-4 w-4 mr-1" />
                            ) : (
                              <FileText className="h-4 w-4 mr-1" />
                            )}
                            Preview
                          </button>
                        )}
                      </button>

                      {expandedTeams[team.id] && (
                        <div className="p-4 pt-2 border-t border-gray-600">
                          <div className="mb-4">
                            <h3 className="text-sm font-medium text-gray-300 mb-2">Team Members</h3>
                            <ul className="space-y-2">
                              {team.participants.map(member => (
                                <li key={member.id} className="flex items-center justify-between bg-gray-700 p-3 rounded-md">
                                  <div>
                                    <p className="font-medium">{member.email}</p>
                                    <p className="text-xs text-gray-400">
                                      {member.storageUrl ? "Project uploaded" : "No project uploaded"}
                                    </p>
                                  </div>
                                  {member.storageUrl && (
                                    <button
                                      onClick={() => previewProject(member.storageUrl!, member.email, 'participant')}
                                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors flex items-center"
                                      disabled={loading.preview}
                                    >
                                      {loading.preview && currentPreview?.name === member.email ? (
                                        <Loader2Icon className="animate-spin h-4 w-4 mr-1" />
                                      ) : (
                                        <FileText className="h-4 w-4 mr-1" />
                                      )}
                                      Preview
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {selectedRoundId && (
                            <div className="mt-4">
                              <h3 className="text-sm font-medium text-gray-300 mb-2">
                                Score for {rounds.find(r => r.id === selectedRoundId)?.name}
                              </h3>
                              <ScoreForm
                                teamId={team.id}
                                existingScore={getTeamScoreForRound(team, selectedRoundId)}
                                onSubmit={handleScoreSubmission}
                                loading={loading.scores}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-blue-400">
                  {currentPreview ? (
                    <>
                      Preview: <span className="text-white">{currentPreview.name}</span>
                      <span className="text-sm text-gray-400 ml-2">({currentPreview.type})</span>
                    </>
                  ) : (
                    "Project Preview"
                  )}
                </h2>
              </div>

              {loading.preview ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="animate-spin h-10 w-10 text-blue-400 mx-auto mb-3" />
                    <p className="text-gray-400">Loading project files...</p>
                  </div>
                </div>
              ) : Object.keys(sandpackFiles).length > 0 ? (
                <div className="flex-1 flex flex-col">
                  <div className="flex border-b border-gray-700">
                    <button
                      onClick={() => handleTabChange("code")}
                      className={`flex-1 py-2 text-sm font-medium ${activeTab === "code" ? "bg-gray-700 text-blue-400" : "text-gray-400 hover:bg-gray-700/50"}`}
                    >
                      Code Editor
                    </button>
                    <button
                      onClick={() => handleTabChange("preview")}
                      className={`flex-1 py-2 text-sm font-medium ${activeTab === "preview" ? "bg-gray-700 text-blue-400" : "text-gray-400 hover:bg-gray-700/50"}`}
                    >
                      Live Preview
                    </button>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <SandpackProvider
                      key={currentPreview ? `${currentPreview.name}-${currentPreview.type}-${currentPreview.timestamp}` : 'default'}
                      files={sandpackFiles}
                      template="react-ts"
                      theme={nightOwl}
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
                      <SandpackLayout className="h-full">
                        {activeTab === "code" ? (
                          <div className="flex h-full">
                            <div className="w-48 border-r border-gray-700">
                              <SandpackFileExplorer 
                                autoHiddenFiles={false}
                                style={{ height: "100%" }}
                              />
                            </div>
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
                          <div className="h-full">
                            <SandpackPreview
                              showNavigator
                              style={{ height: "100%", width: "100%" }}
                              key={`preview-${currentPreview?.timestamp}`}
                            />
                          </div>
                        )}
                      </SandpackLayout>
                    </SandpackProvider>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center text-gray-500">
                    <FileText className="h-10 w-10 mx-auto mb-3 text-gray-600" />
                    <p>Select a project to preview</p>
                    <p className="text-sm mt-1">Click on any "Preview" button to view the project</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreForm({
  teamId,
  existingScore,
  onSubmit,
  loading
}: {
  teamId: string;
  existingScore?: {
    marks: number;
    remarks: string | null;
  };
  onSubmit: (teamId: string, marks: number, remarks: string) => void;
  loading?: boolean;
}) {
  const [marks, setMarks] = useState(existingScore?.marks?.toString() || '');
  const [remarks, setRemarks] = useState(existingScore?.remarks || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!marks) return;
    await onSubmit(teamId, Number(marks), remarks);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Score (0-100)</label>
        <input
          type="number"
          min="0"
          max="100"
          required
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Remarks</label>
        <textarea
          rows={3}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
      >
        {loading ? (
          <>
            <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
            Submitting...
          </>
        ) : existingScore ? 'Update Score' : 'Submit Score'}
      </button>
    </form>
  );
}