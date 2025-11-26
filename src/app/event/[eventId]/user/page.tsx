// // app/event/[eventId]/user/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import { useUserDetails } from "@/hooks/useStore";
// interface Team {
//     id: string;
//     name: string;
//     // Add other team properties here as needed
//   }
// export default function UserEventDashboard() {
//   const { eventId } = useParams();
//   const {user} = useUserDetails();
//   console.log(user)
//   const router = useRouter();
//   const [teamName, setTeamName] = useState("");
//   const [joinCode, setJoinCode] = useState("");
//   const [message, setMessage] = useState("");
//   const [userTeam, setUserTeam] = useState<Team | null>(null);

//   useEffect(() => {
//     // Fetch the user's team details when the component mounts
//     const fetchUserTeam = async () => {
//       if (user) {
//         console.log("eventId:",eventId,"uId:",user.id)
//         try {
//           const res = await axios.get(`/api/users/getTeam?eventId=${eventId}&userId=${user.id}`);
//           console.log("res:",res.data)
//           if (res.data.team) {
//             setUserTeam(res.data.team); // Set user team details if they exist
//             // router.push(`/event/${eventId}/user/upload`); // Redirect to uploads if the user has a team
//           }
//         } catch (error) {
//           console.error("Error fetching user team", error);
//         }
//       }
//     };

//     fetchUserTeam();
//   }, [user, eventId, router]);

//   const handleCreateTeam = async () => {
//     try {
//         if(!user){
//             return
//         }
//       const res = await axios.post("/api/users/createTeam", {
//         eventId,
//         name: teamName,
//         userId:user.id
//       });
//       console.log("res.data",res.data)
//       setMessage(`Team created: ${res.data.team.name}`);
//       // redirect to dashboard or team detail
//       router.push(`./user/upload`);
//     } catch (error) {
//       console.error(error)
//       setMessage( "Failed to create team");
//     }
//   };

//   const handleJoinTeam = async () => {
//     try {
//         if(!user){
//             return
//         }
//       const res = await axios.post("/api/users/joinTeam", {
//         eventId,
//         joinCode,
//         userId:user.id
//       });
//       console.log("resJoinTeam:",res.data)
//       setMessage("Successfully joined the team!");
//       router.push(`./user/upload`);
//     } catch (error) {
//       console.error(error)
//       setMessage( 'Failed to join team');
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//     <h1 className="text-2xl font-bold mb-6">Welcome to Event</h1>

//     {/* If user has no team, show create/join options */}
//     {!userTeam ? (
//       <>
//         <div className="space-y-4 mb-8">
//           <input
//             type="text"
//             placeholder="Enter team name"
//             value={teamName}
//             onChange={(e) => setTeamName(e.target.value)}
//             className="border p-2 w-full"
//           />
//           <button
//             onClick={handleCreateTeam}
//             className="bg-blue-500 text-white p-2 w-full rounded"
//           >
//             Create Team
//           </button>
//         </div>

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter team code"
//             value={joinCode}
//             onChange={(e) => setJoinCode(e.target.value)}
//             className="border p-2 w-full"
//           />
//           <button
//             onClick={handleJoinTeam}
//             className="bg-green-500 text-white p-2 w-full rounded"
//           >
//             Join Team
//           </button>
//         </div>
//       </>
//     ) : (
//       // If the user already has a team, display team info or redirect
//       <>

//       <p className="text-green-500">You are already part of the team: {userTeam.name}</p>
//       <button
//             onClick={() => router.push(`/event/${eventId}/user/upload`)}
//             className="mt-4 bg-blue-500 text-white p-2 w-full rounded"
//           >
//             Go to Uploads
//           </button>
//       </>
//     )}

//     {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//   </div>
// );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { useUserDetails } from "@/hooks/useStore";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Plus,
  ArrowRight,
  Hash,
  Loader2,
  Sparkles,
  Trophy,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

// --- Types ---
interface Team {
  id: string;
  name: string;
}

export default function UserEventDashboard() {
  const { eventId } = useParams();
  const { user } = useUserDetails();
  const router = useRouter();

  // --- State ---
  const [teamName, setTeamName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  // UI State
  const [userTeam, setUserTeam] = useState<Team | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<"create" | "join">("create");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserTeam = async () => {
      if (!user || !eventId) return;

      try {
        setIsLoading(true);
        const res = await axios.get(
          `/api/users/getTeam?eventId=${eventId}&userId=${user.id}`
        );
        console.log("Fetched user team:", res.data);
        if (res.data.team) {
          setUserTeam(res.data.team);
        }
      } catch (error) {
        console.error("Error fetching user team", error);
        // Don't show error to UI here, just means they don't have a team usually
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserTeam();
  }, [user, eventId]);

  // --- Handlers ---
  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !teamName.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await axios.post("/api/users/createTeam", {
        eventId,
        name: teamName,
        userId: user.id,
      });

      setFeedback({
        type: "success",
        msg: `Team "${res.data.team.name}" created!`,
      });
      setUserTeam(res.data.team); // Update local state immediately

      // Optional delay before redirect to let user see success message
      setTimeout(() => {
        router.push(`./user/upload`);
      }, 1000);
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        msg: "Failed to create team. Name might be taken.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJoinTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !joinCode.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await axios.post("/api/users/joinTeam", {
        eventId,
        joinCode,
        userId: user.id,
      });

      setFeedback({ type: "success", msg: "Successfully joined the team!" });
      // Fetch updated team info (or rely on response if backend sends it)
      setUserTeam(res.data.team || { id: "unknown", name: "Your Team" });

      setTimeout(() => {
        router.push(`./user/upload`);
      }, 1000);
    } catch (error) {
      console.error(error);
      setFeedback({ type: "error", msg: "Invalid join code or team is full." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render Helpers ---
  const LoadingView = () => (
    <div className="flex flex-col items-center justify-center h-full">
      <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
      <p className="text-zinc-500 text-sm animate-pulse">
        Syncing participation data...
      </p>
    </div>
  );

  return (
    <div className="h-[calc(100vh-70px)] bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30 overflow-hidden relative flex items-center justify-center px-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        {isLoading ? (
          <LoadingView />
        ) : userTeam ? (
          // --- VIEW: ALREADY IN A TEAM ---
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 text-center border-b border-zinc-800/50">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {userTeam.name}
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Member
                </span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-center text-zinc-400 text-sm mb-6">
                You are all set! Access your team workspace to submit projects
                and view status.
              </p>

              <button
                onClick={() => router.push(`/event/${eventId}/user/upload`)}
                className="w-full py-3.5 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
              >
                Go to Team Workspace
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ) : (
          // --- VIEW: CREATE OR JOIN TEAM ---
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-medium text-indigo-400 mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Team Formation Phase</span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                Assemble Your Squad
              </h1>
              <p className="text-zinc-400 text-sm">
                Create a new alliance or join an existing one to compete.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex bg-zinc-950/60 p-1.5 rounded-xl border border-zinc-800 mb-8">
              <button
                onClick={() => {
                  setActiveTab("create");
                  setFeedback(null);
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  activeTab === "create"
                    ? "bg-zinc-800 text-white shadow-sm ring-1 ring-white/10"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Plus className="w-4 h-4" /> Create Team
              </button>
              <button
                onClick={() => {
                  setActiveTab("join");
                  setFeedback(null);
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  activeTab === "join"
                    ? "bg-zinc-800 text-white shadow-sm ring-1 ring-white/10"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Users className="w-4 h-4" /> Join Team
              </button>
            </div>

            {/* Forms */}
            <div className="min-h-[140px]">
              <AnimatePresence mode="wait">
                {activeTab === "create" ? (
                  <motion.form
                    key="create"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleCreateTeam}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                        Team Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Quantum Solvers"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-xl p-3 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !teamName}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Create New Team"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="join"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleJoinTeam}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                        Join Code
                      </label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          type="text"
                          placeholder="Paste code here..."
                          value={joinCode}
                          onChange={(e) => setJoinCode(e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-xl pl-10 pr-4 py-3 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600 font-mono"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !joinCode}
                      className="w-full py-3 bg-white hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Join Team"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Feedback Messages */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-6 p-3 rounded-lg flex items-center gap-3 text-sm border ${
                    feedback.type === "success"
                      ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400"
                      : "bg-red-950/30 border-red-500/30 text-red-400"
                  }`}
                >
                  {feedback.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  {feedback.msg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
