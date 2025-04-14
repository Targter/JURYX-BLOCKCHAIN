import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUploadStore, useUserDetails } from '@/hooks/useStore';
import { createZip } from '@/libs/zip-utils';
// import { zipSync, strToU8 } from 'fflate';
import axios from 'axios';
const UserUpload = () => {
  const router = useRouter(); 
  const {setFiles} = useUploadStore(); 
  const [loading,setLoading] = useState(false)
  
  // 
  const {user} = useUserDetails();
  console.log("user:",user?.email)
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Convert FileList to Array
    const fileArray = Array.from(files)
    setLoading(true); 
    // 
    // const formData = new FormData(); 
    // fileArray.forEach((file) => {
    //   formData.append("files", file); // sends file
    //   formData.append("paths", (file as any).webkitRelativePath); // sends folder path
    // });
    // fileArrray[0].webkitRelativePath
    // console.log("formData",formData)

    // const zipObj: Record<string, Uint8Array> = {};

    // for (const file of Array.from(files)) {
    //   const path = (file as any).webkitRelativePath;
    //   if (!path) continue;

    //   // Skip unwanted folders like node_modules or .git
    //   if (path.includes('node_modules') || path.includes('.git')) continue;

    //   const buffer = await file.arrayBuffer();
    //   zipObj[path] = new Uint8Array(buffer);
    // }

    // // Create the zip in memory
    // const zipped = zipSync(zipObj, { level: 9 });

    // const formData = new FormData();
    // formData.append('zip', new Blob([zipped], { type: 'application/zip' }), 'project.zip');

    // Optional: Log file paths (for debugging)
    const zipBlob = await createZip(fileArray)
    const formData = new FormData();
    formData.append('project', zipBlob, 'project.zip');
    formData.append("userId",String(user?.email))
      
    console.log("zipped")
    // console.log(fileArray.map(f => f.webkitRelativePath))
    const response  = await axios.post("/api/users/userFileUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log("finalFormDAta",formData)
    console.log(response)
    console.log(fileArray)
    setFiles(fileArray)
    // Navigate to preview and pass files using state
    router.push("/user/dashboard")
  }

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Project Folder</h2>
        <p className="text-gray-500 text-sm mb-6">Select a folder containing your full project files</p>

        <label
          htmlFor="folder-upload"
          className="cursor-pointer inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 ease-in-out"
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
            <div className="flex items-center gap-2 mt-4">
              <span className="loading loading-spinner"></span>
              Processing files...
            </div>
          )}

        <p className="mt-4 text-sm text-gray-400">Only folders supported</p>
      </div>
    </div>
  )
}

export default UserUpload
