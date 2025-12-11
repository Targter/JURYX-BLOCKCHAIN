// import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
// import { prisma } from "@dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";

// const s3 = new S3Client({
//   region: process.env.AWS_REGION!,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//   },
// });

// export async function POST(request: NextRequest) {
//   const formData = await request.formData();
//   const file = formData.get("project") as File;
//   const userMail = formData.get("userId") as string;

//   if (!file || !userMail) {
//     return NextResponse.json({ error: "Missing file or user" }, { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());
//   const fileName = `projects/${userMail}/${Date.now()}-project.zip`;
//   const bucketName = process.env.AWS_S3_BUCKET_NAME!;

//   try {
//     // 1. Fetch current user data
//     const user = await prisma.user.findUnique({ where: { email: userMail } });

//     // 2. If user already has a file, delete it from S3
//     if (user?.storageUrl) {
//       const existingKey = user.storageUrl.split(`.amazonaws.com/`)[1]; // extract key from URL
//       if (existingKey) {
//         await s3.send(new DeleteObjectCommand({
//           Bucket: bucketName,
//           Key: existingKey,
//         }));
//         console.log("Previous file deleted:", existingKey);
//       }
//     }

//     // 3. Upload new file
//     await s3.send(new PutObjectCommand({
//       Bucket: bucketName,
//       Key: fileName,
//       Body: buffer,
//       ContentType: file.type,
//     //   ACL: 'public-read', 
//     }));  
//     const fileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

//     // 4. Update DB
//     await prisma.user.update({
//       where: { email: userMail },
//       data: { storageUrl: fileUrl },
//     });

//     return NextResponse.json({ success: true, url: fileUrl });

//   } catch (err) {
//     console.error("Upload error:", err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }


// import { S3Client } from "@aws-sdk/client-s3";
// import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
// import { prisma } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

// const s3 = new S3Client({
//   region: process.env.AWS_REGION!,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//   },
// });

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("project") as File;
    const userId = formData.get("userId") as string;
    const eventId = formData.get("eventId") as string; // Required to find the team context
    console.log("Received upload request for userId:", userId, "eventId:", eventId);
    console.log("File details:", file);
    if (!file || !userId || !eventId) {
      return NextResponse.json(
        { error: "Missing file, userId, or eventId" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const bucketName = process.env.AWS_S3_BUCKET_NAME!;
    console.log(process.env.AWS_S3_BUCKET_NAME);
    console.log(process.env.AWS_REGION);
    console.log(process.env.AWS_ACCESS_KEY_ID);
    console.log(process.env.AWS_SECRET_ACCESS_KEY);

    // 
    console.log("Buffer size:", buffer.length);
    console.log("Bucket name:", bucketName);
    // console.log("Preparing to handle file upload...",s3);
    // // 1. Find the User's Team via EventRole
    // // We need to find which team this user belongs to FOR THIS SPECIFIC EVENT
    // const eventRole = await prisma.eventRole.findUnique({
    //   where: {
    //     userId_eventId: {
    //       userId: Number(userId),
    //       eventId: eventId,
    //     },
    //   },
    //   include: {
    //     team: true, // We need the team data to check existing files and get the ID
    //   },
    // });

    // console.log("Found eventRole:", eventRole);

    // if (!eventRole || !eventRole.team) {
    //   return NextResponse.json(
    //     { error: "User is not part of a team for this event" },
    //     { status: 404 }
    //   );
    // }

    // const team = eventRole.team;
    // console.log("User's team:", team);
    // // 2. If Team already has a file, delete it from S3
    // if (team.storageUrl) {
    //   try {
    //     // Safe extraction of the key from the full URL
    //     const fileUrlObj = new URL(team.storageUrl);
    //     // The pathname usually starts with '/', so we strip it to get the Key
    //     const existingKey = fileUrlObj.pathname.substring(1); 
    //     const existingKey2 = decodeURIComponent(existingKey); 
    //     console.log("Existing file key to delete.....:", existingKey2);
    //     console.log("Existing file key to delete.....:", existingKey);

    //     await s3.send(new DeleteObjectCommand({
    //       Bucket: bucketName,
    //       Key: existingKey2,
    //     }));
    //     console.log("Previous file deleted:", existingKey2);
    //   } catch (e) {
    //     console.warn("Failed to delete old file (might not exist):", e);
    //   }
    // }

    // // 3. Upload new file
    // // Organized by Event -> Team -> File
    // const safeTeamName = team.name.replace(/[^a-zA-Z0-9]/g, "_");
    // console.log("Safe team name for S3 key:", safeTeamName);
    // console.log("Uploading new file to S3...");
    // console.log(eventId, safeTeamName);
    // const fileName = `projects/${eventId}/${safeTeamName}/${Date.now()}-project.zip`;
    
    // await s3.send(new PutObjectCommand({
    //   Bucket: bucketName,
    //   Key: fileName,
    //   Body: buffer,
    //   ContentType: file.type,
    //   // ACL: 'public-read', // Uncomment if bucket is not public by policy
    // }));  
    
    // const fileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    // console.log("File uploaded to S3 at URL:", fileUrl);
    // // 4. Update the TEAM (not the User)
    // await prisma.team.update({
    //   where: { id: team.id },
    //   data: { storageUrl: fileUrl },
    // });
    // console.log("Team storageUrl updated in DB.");

    // return NextResponse.json({ success: true, url: fileUrl });
    return NextResponse.json({ message: "File upload logic is currently disabled." });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}