// /api/panelist/getAllUsers.ts

import { NextResponse } from "next/server";
import { prisma } from "@dbConfig/dbConfig";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      isPublic:true,
      storageUrl: true, // This is the S3 zip URL
      role:true,
    },
  });

  return NextResponse.json({ users });
}
