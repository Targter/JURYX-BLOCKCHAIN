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


  // 

  type Role = 'USER' | 'ORGANIZER' | 'PANELIST'

type User = {
  id: number
  email: string
  role: Role
  isPublic?: boolean
}

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}


export const useUserDetails = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))