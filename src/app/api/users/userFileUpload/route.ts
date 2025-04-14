import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { prisma } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("project") as File;
  const userMail = formData.get("userId") as string;

  if (!file || !userMail) {
    return NextResponse.json({ error: "Missing file or user" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `projects/${userMail}/${Date.now()}-project.zip`;
  const bucketName = process.env.AWS_S3_BUCKET_NAME!;

  try {
    // 1. Fetch current user data
    const user = await prisma.user.findUnique({ where: { email: userMail } });

    // 2. If user already has a file, delete it from S3
    if (user?.storageUrl) {
      const existingKey = user.storageUrl.split(`.amazonaws.com/`)[1]; // extract key from URL
      if (existingKey) {
        await s3.send(new DeleteObjectCommand({
          Bucket: bucketName,
          Key: existingKey,
        }));
        console.log("Previous file deleted:", existingKey);
      }
    }

    // 3. Upload new file
    await s3.send(new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    //   ACL: 'public-read', 
    }));
    const fileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    // 4. Update DB
    await prisma.user.update({
      where: { email: userMail },
      data: { storageUrl: fileUrl },
    });

    return NextResponse.json({ success: true, url: fileUrl });

  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
