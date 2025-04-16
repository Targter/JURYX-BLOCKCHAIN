// app/api/team/join/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";

export async function POST(req: NextRequest) {
  try {
    const { userId, eventId, joinCode } = await req.json();
    console.log(joinCode)
    console.log(eventId)
    console.log(userId)
    if(!userId || !joinCode || !eventId){
        return NextResponse.json({error:"Details not found"},{status:402})
    }
    const team = await prisma.team.findFirst({
      where: { name: joinCode, eventId },
    });
    console.log("team")
    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { teamId: team.id },
    });

    await prisma.team.update({
      where: { id: team.id },
      data: {
        participants: { connect: { id: userId } },
      },
    });

    return NextResponse.json({ message: "Joined team successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
  }
}
