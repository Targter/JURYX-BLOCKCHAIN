import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@dbConfig/dbConfig";
// import { getUserFromToken } from "@/lib/auth"; // helper to extract user from token

export async function POST(req: NextRequest) {
  try {
    const { name, eventId,userId } = await req.json();
    
    const team = await prisma.team.create({
      data: {
        name,
        eventId,
        participants: { connect: { id: userId} },
      },
    });

    await prisma.user.update({
      where: { id: userId},
      data: { teamId: team.id },
    });

    return NextResponse.json({ team });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
  }
}
