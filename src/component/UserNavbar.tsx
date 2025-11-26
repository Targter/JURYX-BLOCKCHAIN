// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // Use 'next/router' if using Pages directory
// import { useUserDetails } from "@/hooks/useStore";

// export default function Navbar() {
//   const { user, clearUser } = useUserDetails();
//   console.log("User in Navbar:", user);
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);

//   // Prevent hydration mismatch by ensuring component only renders user-dependent UI on client
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // --- Configuration ---
//   console.log("normalizedRole:", user);
//   const getRoleConfig = (role: string) => {
//     const normalizedRole = role.toUpperCase();
//     switch (normalizedRole) {
//       case "ORGANIZER":
//         return {
//           path: "/organizer",
//           label: "Organizer Panel",
//           icon: (
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//               />
//             </svg>
//           ),
//         };
//       case "PANELIST":
//         return {
//           path: `/event/${user?.eventId}/panelist/`,
//           label: "Judging Console",
//           icon: (
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//               />
//             </svg>
//           ),
//         };
//       default: // PARTICIPANT
//         return {
//           path: `/event/${user?.eventId}/user/`,
//           label: "Event Hub",
//           icon: (
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           ),
//         };
//     }
//   };

//   const getUserInitials = (email: string) =>
//     email.substring(0, 2).toUpperCase();

//   const handleLogout = () => {
//     clearUser();
//     router.push("/login");
//   };

//   // Get current role configuration
//   // const roleConfig = user ? getRoleConfig(user?.role) : null;
//   const roleConfig = user && user.role ? getRoleConfig(user.role) : null;

//   return (
//     <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* LEFT: Logo */}
//           <Link
//             href="/"
//             className="flex-shrink-0 flex items-center gap-3 group"
//           >
//             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
//               <svg
//                 className="w-5 h-5 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M13 10V3L4 14H11V21L20 10H13Z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <span className="text-xl font-bold text-zinc-100 tracking-tight">
//               Juryx
//             </span>
//           </Link>

//           {/* RIGHT: Actions & Profile */}
//           <div className="flex items-center gap-4">
//             {mounted && user && roleConfig ? (
//               <div className="flex items-center gap-4 animate-in fade-in duration-300">
//                 {/* ROLE-SPECIFIC DASHBOARD LINK */}
//                 <Link
//                   href={roleConfig.path}
//                   className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
//                 >
//                   {roleConfig.icon}
//                   <span>{roleConfig.label}</span>
//                 </Link>

//                 {/* Vertical Divider */}
//                 <div className="h-6 w-px bg-zinc-800 mx-1 hidden sm:block"></div>

//                 {/* User Profile Info */}
//                 <div className="flex items-center gap-3">
//                   <div className="hidden md:flex flex-col items-end">
//                     <span className="text-sm font-medium text-zinc-200 leading-none">
//                       {user.email}
//                     </span>
//                     <span className="text-[10px] uppercase font-bold text-zinc-500 mt-1">
//                       {user.role}
//                     </span>
//                   </div>

//                   {/* Avatar Circle */}
//                   <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-inner group cursor-default">
//                     <span className="text-sm font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
//                       {getUserInitials(user.email)}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Logout Button (Action, not a link) */}
//                 <button
//                   onClick={handleLogout}
//                   title="Logout"
//                   className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-900 rounded-lg transition-colors border border-transparent hover:border-zinc-800"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             ) : (
//               // LOGGED OUT STATE
//               mounted && (
//                 <Link
//                   href="/login"
//                   className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-indigo-400 transition duration-300 ease-out border border-indigo-500/30 rounded-lg hover:bg-indigo-950/30"
//                 >
//                   <span className="flex items-center gap-2">
//                     <span>Login</span>
//                     <svg
//                       className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       ></path>
//                     </svg>
//                   </span>
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserDetails } from "@/hooks/useStore";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Gavel,
  Users,
  LogOut,
  LogIn,
  Terminal,
  Code2, // Added icon for developer
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const { user, clearUser } = useUserDetails();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Configuration based on Role ---
  const getRoleConfig = (role: string) => {
    const normalizedRole = role.toUpperCase();
    switch (normalizedRole) {
      case "ORGANIZER":
        return {
          path: "/organizer",
          label: "Command Center",
          icon: <LayoutDashboard className="w-4 h-4" />,
          color: "text-indigo-400",
          bgColor: "bg-indigo-500/10 border-indigo-500/20",
        };
      case "PANELIST":
        return {
          path: `/event/${user?.eventId}/panelist/`,
          label: "Judging Console",
          icon: <Gavel className="w-4 h-4" />,
          color: "text-emerald-400",
          bgColor: "bg-emerald-500/10 border-emerald-500/20",
        };
      default: // USER (Participant)
        return {
          path: `/event/${user?.eventId}/user/`,
          label: "Participant Hub",
          icon: <Users className="w-4 h-4" />,
          color: "text-cyan-400",
          bgColor: "bg-cyan-500/10 border-cyan-500/20",
        };
    }
  };

  const getUserInitials = (email: string) =>
    email.substring(0, 2).toUpperCase();

  const handleLogout = () => {
    clearUser();
    router.push("/login");
  };

  const roleConfig = user && user.role ? getRoleConfig(user.role) : null;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl "
    >
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT: Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9 bg-zinc-900 rounded-lg border border-white/10 group-hover:border-indigo-500/50 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight leading-none">
              JURYX
            </span>
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
              Protocol V1
            </span>
          </div>
        </Link>

        {/* RIGHT: User Controls & Credit */}
        <div className="flex items-center gap-6">
          {/* --- DEVELOPER CREDIT BADGE --- */}
          <a
            href="https://linkedin.com/in/abhaybansal001"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all group"
            title="Developed by Abhay Bansal"
          >
            <Code2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide group-hover:text-zinc-300 transition-colors">
              Dev_Op:{" "}
              <span className="font-bold text-zinc-300 group-hover:text-white">
                Abhay
              </span>
            </span>
          </a>

          {/* Separator */}
          <div className="h-6 w-px bg-zinc-800 hidden md:block" />

          {mounted && user && roleConfig ? (
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500">
              {/* Role Dashboard Button */}
              <Link
                href={roleConfig.path}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-wide transition-all hover:scale-105 active:scale-95 ${roleConfig.bgColor} ${roleConfig.color} hover:bg-opacity-20`}
              >
                {roleConfig.icon}
                <span>{roleConfig.label}</span>
              </Link>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-xs font-medium text-zinc-300 font-mono">
                    {user.email}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${roleConfig.color.replace(
                        "text-",
                        "bg-"
                      )}`}
                    />
                    <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">
                      {user.role} Mode
                    </span>
                  </div>
                </div>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner ring-1 ring-transparent hover:ring-zinc-700 transition-all">
                  <span className="text-xs font-bold text-zinc-400 group-hover:text-white font-mono">
                    {getUserInitials(user.email)}
                  </span>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                title="Disconnect Session"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            // Logged Out State
            mounted && (
              <Link
                href="/login"
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-zinc-200 transition-all"
              >
                <LogIn className="w-3 h-3" />
                <span>Connect ID</span>
              </Link>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
}
