// // newww
// import React, { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useUploadStore, useUserDetails } from "@/hooks/useStore";
// import { createZip } from "@/libs/zip-utils";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   UploadCloud,
//   Folder,
//   Loader2,
//   FileCode,
//   CheckCircle2,
//   AlertCircle,
// } from "lucide-react";
// const UserUpload = () => {
//   const router = useRouter();
//   const { setFiles } = useUploadStore();
//   const [loading, setLoading] = useState(false);

//   const [uploadStatus, setUploadStatus] = useState<
//     "idle" | "uploading" | "success"
//   >("idle");
//   const [dragActive, setDragActive] = useState(false);
//   const { user } = useUserDetails();
//   const { eventId } = useParams();

//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;
//     setUploadStatus("uploading");
//     const fileArray = Array.from(files);
//     setLoading(true);

//     const zipBlob = await createZip(fileArray);
//     const formData = new FormData();
//     formData.append("project", zipBlob, "project.zip");
//     formData.append("userId", String(user?.email));
//     console.log("user.email:", user);
//     console.log("formData:", formData);
//     const response = await axios.post("/api/users/userFileUpload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log("finalFormDAta", formData);
//     console.log(response);
//     setFiles(fileArray);
//     setUploadStatus("success");
//     router.push(`/event/${eventId}/user/dashboard`);
//   };

//   const handleDrag = (e: React.DragEvent) => {
//     e.preventDefault();
//     console.log("Drag Event:", e.type);
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-70px)] bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30 overflow-hidden relative flex items-center justify-center px-4">
//       {/* Background Ambience */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-lg relative z-10"
//       >
//         <div className="bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="p-8 pb-0 text-center">
//             <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
//               <Folder className="w-7 h-7 text-indigo-400" />
//             </div>
//             <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
//               Upload Project Source
//             </h2>
//             <p className="text-zinc-400 text-sm max-w-xs mx-auto">
//               Select the root folder of your project. We'll handle the
//               compression and submission.
//             </p>
//           </div>

//           {/* Upload Area */}
//           <div className="p-8">
//             <div
//               className={`relative group border-2 border-dashed rounded-xl transition-all duration-300 ease-in-out ${
//                 dragActive
//                   ? "border-indigo-500 bg-indigo-500/5"
//                   : "border-zinc-700 hover:border-zinc-600 bg-zinc-950/30 hover:bg-zinc-950/50"
//               }`}
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrag}
//             >
//               <label
//                 htmlFor="folder-upload"
//                 className={`flex flex-col items-center justify-center w-full h-48 cursor-pointer ${
//                   loading ? "cursor-not-allowed pointer-events-none" : ""
//                 }`}
//               >
//                 <AnimatePresence mode="wait">
//                   {loading ? (
//                     <motion.div
//                       key="loading"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="flex flex-col items-center"
//                     >
//                       <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-3" />
//                       <p className="text-sm font-medium text-zinc-300">
//                         Processing files...
//                       </p>
//                       <p className="text-xs text-zinc-500 mt-1">
//                         This may take a moment
//                       </p>
//                     </motion.div>
//                   ) : uploadStatus === "success" ? (
//                     <motion.div
//                       key="success"
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="flex flex-col items-center"
//                     >
//                       <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-3">
//                         <CheckCircle2 className="w-6 h-6 text-emerald-500" />
//                       </div>
//                       <p className="text-sm font-medium text-white">
//                         Upload Complete!
//                       </p>
//                       <p className="text-xs text-zinc-500 mt-1">
//                         Redirecting...
//                       </p>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="idle"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="flex flex-col items-center text-center px-4"
//                     >
//                       <UploadCloud
//                         className={`w-10 h-10 mb-3 transition-colors ${
//                           dragActive
//                             ? "text-indigo-400"
//                             : "text-zinc-500 group-hover:text-zinc-400"
//                         }`}
//                       />
//                       <p className="text-sm font-medium text-zinc-200">
//                         <span className="text-indigo-400">Click to upload</span>{" "}
//                         or drag and drop
//                       </p>
//                       <p className="text-xs text-zinc-500 mt-2">
//                         Supported: Entire Project Folder
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <input
//                   type="file"
//                   id="folder-upload"
//                   className="hidden"
//                   onChange={handleUpload}
//                   disabled={loading}
//                   // @ts-expect-error - webkitdirectory is non-standard but required for folder uploads
//                   webkitdirectory="true"
//                   directory=""
//                   multiple
//                 />
//               </label>
//             </div>

//             {/* Footer / Info */}
//             <div className="mt-6 flex items-start gap-3 p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50">
//               <FileCode className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
//               <div className="text-xs text-zinc-400 leading-relaxed">
//                 <span className="font-semibold text-zinc-300">
//                   Technical Note:
//                 </span>{" "}
//                 Ensure your folder includes your{" "}
//                 <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-200">
//                   package.json
//                 </code>{" "}
//                 or configuration files. Node_modules will be ignored
//                 automatically.
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default UserUpload;

"use client";

import React, { useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useUploadStore, useUserDetails } from "@/hooks/useStore";
import { createZip } from "@/libs/zip-utils";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  Folder,
  Loader2,
  FileCode,
  CheckCircle2,
} from "lucide-react";

const UserUpload = () => {
  const router = useRouter();
  const { setFiles } = useUploadStore();
  const { user } = useUserDetails();
  const { eventId } = useParams();

  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success"
  >("idle");
  const [dragActive, setDragActive] = useState(false);

  // --- Core Upload Logic (Reusable) ---
  const processFiles = async (fileList: File[]) => {
    if (!fileList || fileList.length === 0) return;

    setLoading(true);
    setUploadStatus("uploading");

    try {
      // Create ZIP
      const zipBlob = await createZip(fileList);

      const formData = new FormData();
      console.log("zipBlob:", zipBlob);
      formData.append("project", zipBlob, "project.zip");
      formData.append("userId", String(user?.id)); // Ensure this matches your backend expectation (ID vs Email)
      formData.append("eventId", String(eventId)); // Include eventId for context
      console.log("user.email:", user);
      console.log("formData:", formData);

      // Upload
      const response = await axios.post("/api/users/userFileUpload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Upload response:", response);

      // Update State & Redirect
      setFiles(fileList);
      setUploadStatus("success");

      // Small delay for UX so user sees the success checkmark
      setTimeout(() => {
        router.push(`/event/${eventId}/user/dashboard`);
      }, 1000);
    } catch (error) {
      console.error("Upload failed:", error);
      setLoading(false);
      setUploadStatus("idle");
      alert("Upload failed. Please try again.");
    }
  };

  // --- Event Handlers ---

  // 1. Handle File Input Change (Click)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(Array.from(e.target.files));
    }
  };

  // 2. Handle Drag Events (Visuals)
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  // 3. Handle Drop Event (Logic)
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        // Convert FileList to Array
        processFiles(Array.from(e.dataTransfer.files));
      }
    },
    [user, eventId]
  ); // Dependencies needed if processFiles uses them directly, but here processFiles is inside component

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Container - removed fixed heights and external bg blobs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full flex flex-col gap-4"
      >
        {/* Header Section */}
        <div className="text-center space-y-2 mb-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-indigo-400 mb-1 shadow-inner">
            <Folder className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Select Project Root
            </h2>
            <p className="text-zinc-400 text-xs max-w-[260px] mx-auto leading-relaxed">
              Upload your project folder. We'll auto-compress and ignore
              node_modules.
            </p>
          </div>
        </div>

        {/* Upload Zone */}
        <div
          className={`relative group flex flex-col items-center justify-center w-full h-48 sm:h-56 rounded-xl border-2 border-dashed transition-all duration-300 ease-out overflow-hidden ${
            dragActive
              ? "border-indigo-500 bg-indigo-500/10 scale-[1.01]"
              : "border-zinc-700/50 hover:border-zinc-600 bg-zinc-950/20 hover:bg-zinc-900/40"
          } ${loading ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {/* Input needs to cover the area but be hidden */}
          <label className="absolute inset-0 w-full h-full cursor-pointer z-10">
            <input
              type="file"
              className="hidden"
              onChange={handleInputChange}
              disabled={loading}
              // @ts-expect-error - webkitdirectory is non-standard
              webkitdirectory="true"
              directory=""
              multiple
            />
          </label>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center p-4 text-center z-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
                  <Loader2 className="w-8 h-8 text-indigo-400 animate-spin relative z-10" />
                </div>
                <h3 className="text-sm font-semibold text-white mt-4">
                  Processing...
                </h3>
                <p className="text-xs text-zinc-500 mt-1">Compressing files</p>
              </motion.div>
            ) : uploadStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-4 text-center z-0"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2 border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  Upload Complete
                </h3>
                <p className="text-xs text-zinc-500">
                  Project ready for preview
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center p-4 text-center z-0 pointer-events-none"
              >
                <div
                  className={`p-3 rounded-full mb-3 transition-colors duration-300 ${
                    dragActive ? "bg-indigo-500/20" : "bg-zinc-800/50"
                  }`}
                >
                  <UploadCloud
                    className={`w-6 h-6 transition-colors duration-300 ${
                      dragActive ? "text-indigo-400" : "text-zinc-400"
                    }`}
                  />
                </div>
                <p className="text-sm font-medium text-zinc-300">
                  <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Click to browse
                  </span>{" "}
                  or drag folder
                </p>
                <p className="text-[11px] text-zinc-500 mt-1.5 uppercase tracking-wide font-medium">
                  Project Directory Only
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Technical Note */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex gap-3 items-start">
          <FileCode className="w-4 h-4 text-indigo-500/70 mt-0.5 shrink-0" />
          <div className="text-[11px] text-zinc-400 leading-relaxed">
            <strong className="text-zinc-300 block mb-0.5">
              Structure Requirement
            </strong>
            Ensure the folder contains{" "}
            <code className="bg-zinc-800 px-1 rounded text-zinc-200 border border-zinc-700">
              package.json
            </code>
            . Heavy folders (node_modules, .git) are automatically excluded.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserUpload;
