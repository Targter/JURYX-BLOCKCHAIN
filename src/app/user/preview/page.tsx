'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useWeb } from '@/app/useWebContainer';
import { useWebStore } from '@/hooks/useStore';
// import { WebContainer } from '@webcontainer/api';
const PreviewPage = () => {
  const { webContainerData } = useWebStore();
  const webcontainer = useWeb();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [url, setUrl] = useState("");
//   const [webcontainer,setWebContainer] = useState<WebContainer>()
//   
// const main = async ()=>{
//     const webcontainerInstance = await WebContainer.boot();
//     console.log("this called: ",webcontainerInstance)
//     setWebContainer(webcontainerInstance)
// }
// useEffect(()=>{
//     main();
// },[])

  
// 
  useEffect(() => {
    const setupWebContainer = async () => {
      if (!webcontainer || !webContainerData) return;

      // 1. Mount the filesystem
      await webcontainer.mount(webContainerData);
      console.log('✅ Mounted FS');

      // 2. Install dependencies
      const install = await webcontainer.spawn('npm', ['install']);
      install.output.pipeTo(
        new WritableStream({
          write(data) {
            console.log('📦 npm install:', data);
          },
        })
      );
      await install.exit;
      console.log('✅ Dependencies installed');

      // 3. Start the dev server
      const server = await webcontainer.spawn('npm', ['run', 'dev']); // or ['vite'] or ['next', 'dev']
      server.output.pipeTo(
        new WritableStream({
          write(data) {
            console.log('🚀 Dev Server:', data);
          },
        })
      );

      // 4. Listen to server port
      webcontainer.on('server-ready', (port, url) => {
        console.log(`🌐 Dev server ready on port ${port}, url: ${url}`);
        setUrl(url);
      });
    };

    setupWebContainer();
  }, [webContainerData, webcontainer]);
 
  return (
    <div className="w-full h-screen">
      {url ? (
        <iframe
          ref={iframeRef}
          src={url}
          className="w-full h-full border-none"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-600">
          Loading preview...
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
