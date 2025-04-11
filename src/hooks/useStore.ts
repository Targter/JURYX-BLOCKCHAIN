import {create} from "zustand"

type UploadStore = {
    files: File[];
    setFiles: (files: File[]) => void;
  };
  
  export const useUploadStore = create<UploadStore>((set) => ({
    files: [],
    setFiles: (files) => set({ files }),
  }));


//   
type WebContainerFS = {
    [key: string]: 
      | { directory: WebContainerFS }
      | { file: { contents: string } }
  };
  
  type WebStore = {
    webContainerData: WebContainerFS | null;
    setWebContainerData: (data: WebContainerFS) => void;
  };
  
  export const useWebStore = create<WebStore>((set) => ({
    webContainerData: null,
    setWebContainerData: (container) => set({ webContainerData: container }),
  }));