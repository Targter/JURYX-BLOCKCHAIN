import {prisma} from "@dbConfig/dbConfig"
import { NextResponse,NextRequest } from "next/server"


export async function POST(request:NextRequest){

     
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const path = formData.getAll("paths") as string[]; 
    // console.log("files",files)
    const fileInfos = files.map((file,index) => ({
      name: file.name,
      path: path[index], // this simulates folder structure
      size: file.size,
    }));
    // console.log("allPath",path)
  
    console.log("Uploaded folder structure:", fileInfos);
    return NextResponse.json({message:"File Uploaded to database successfully"})
}