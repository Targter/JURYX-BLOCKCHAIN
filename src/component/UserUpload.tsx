// import React, { useState } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import { useUploadStore, useUserDetails } from '@/hooks/useStore';
// import { createZip } from '@/libs/zip-utils';
// // import { zipSync, strToU8 } from 'fflate';
// import axios from 'axios';
// const UserUpload = () => {
//   const router = useRouter(); 
//   const {setFiles} = useUploadStore(); 
//   const [loading,setLoading] = useState(false)
  
//   // 
//   const {user} = useUserDetails();
//   console.log("user:",user?.email)
//   const {eventId} = useParams(); 
//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files || files.length === 0) return

//     // Convert FileList to Array
//     const fileArray = Array.from(files)
//     setLoading(true); 

//     const zipBlob = await createZip(fileArray)
//     const formData = new FormData();
//     formData.append('project', zipBlob, 'project.zip');
//     formData.append("userId",String(user?.email))
      
//     console.log("zipped")
   
//     // console.log(fileArray.map(f => f.webkitRelativePath))
//   //  temp disable
//   // *****************************************************
//     // const response  = await axios.post("/api/users/userFileUpload", formData, {
//     //   headers: {
//     //     "Content-Type": "multipart/form-data"
//     //   }
//     // });
//     // console.log("finalFormDAta",formData)
//     // console.log(response)
//     // console.log(fileArray)
//     // *************************************************
//     setFiles(fileArray)
//     // Navigate to preview and pass files using state
//     router.push(`/event/${eventId}/user/dashboard`)
//   }

//   return (
//     <div className="h-screen w-full bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
//         <h2 className="text-2xl font-semibold mb-4">Upload Your Project Folder</h2>
//         <p className="text-gray-500 text-sm mb-6">Select a folder containing your full project files</p>

//         <label
//           htmlFor="folder-upload"
//           className="cursor-pointer inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 ease-in-out"
//         >
//           Choose Folder
//         </label>

//         <input
//           type="file"
//           multiple
//           //@ts-ignore
//           webkitdirectory="true"
//           id="folder-upload"
//           className="hidden"
//           onChange={handleUpload}
//           disabled={loading}
//         />

// {loading && (
//             <div className="flex items-center gap-2 mt-4">
//               <span className="loading loading-spinner"></span>
//               Processing files...
//             </div>
//           )}

//         <p className="mt-4 text-sm text-gray-400">Only folders supported</p>
//       </div>
//     </div>
//   )
// }

// export default UserUpload


// newww 
import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useUploadStore, useUserDetails } from '@/hooks/useStore';
import { createZip } from '@/libs/zip-utils';
import axios from 'axios';

const UserUpload = () => {
  const router = useRouter(); 
  const { setFiles } = useUploadStore(); 
  const [loading, setLoading] = useState(false);
  const { user } = useUserDetails();
  const { eventId } = useParams();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    setLoading(true);

    const zipBlob = await createZip(fileArray);
    const formData = new FormData();
    formData.append('project', zipBlob, 'project.zip');
    formData.append("userId", String(user?.email));
      // const formData = new FormData();
//     formData.append('project', zipBlob, 'project.zip');
//     formData.append("userId",String(user?.email))
      
//     console.log("zipped")
   
//     // console.log(fileArray.map(f => f.webkitRelativePath))
//   //  temp disable
//   // *****************************************************
    const response  = await axios.post("/api/users/userFileUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log("finalFormDAta",formData)
    console.log(response)
//     // console.log(fileArray)
//     // *************************************************
//     setFiles(fileArray)
    setFiles(fileArray);
    router.push(`/event/${eventId}/user/dashboard`);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-down">Upload Your Project</h2>
        <p className="text-gray-400 text-sm mb-6 animate-fade-in-up">Select a folder containing your project files</p>

        <label
          htmlFor="folder-upload"
          className={`cursor-pointer inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-indigo-600 hover:to-purple-700'}`}
        >
          Choose Folder
        </label>

        <input
          type="file"
          multiple
          //@ts-ignore
          webkitdirectory="true"
          id="folder-upload"
          className="hidden"
          onChange={handleUpload}
          disabled={loading}
        />

        {loading && (
          <div className="flex items-center justify-center gap-2 mt-6 animate-pulse">
            <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            </svg>
            <span className="text-gray-300">Processing files...</span>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500 animate-fade-in-up">Only folders supported</p>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .min-h-screen {
          background-size: 200% 200%;
          animation: gradientShift 15s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-100px) scale(1.2); opacity: 0.6; }
          100% { transform: translateY(0) scale(1); opacity: 0.3; }
        }

        .particle {
          position: absolute;
          background: rgba(129, 140, 248, 0.3);
          border-radius: 50%;
          filter: blur(5px);
        }

        .particle-1 {
          width: 20px;
          height: 20px;
          top: 10%;
          left: 20%;
          animation: float 8s infinite ease-in-out;
        }

        .particle-2 {
          width: 15px;
          height: 15px;
          top: 60%;
          left: 70%;
          animation: float 10s infinite ease-in-out 2s;
        }

        .particle-3 {
          width: 25px;
          height: 25px;
          top: 30%;
          left: 50%;
          animation: float 12s infinite ease-in-out 4s;
        }

        .particle-4 {
          width: 18px;
          height: 18px;
          top: 80%;
          left: 30%;
          animation: float 9s infinite ease-in-out 6s;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out 0.2s;
          animation-fill-mode: backwards;
        }
      `}</style>
    </div>
  )
}

export default UserUpload