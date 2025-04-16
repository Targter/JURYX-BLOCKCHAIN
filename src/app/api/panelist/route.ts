// app/api/panelist/teams/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";

export async function POST(req: NextRequest) {
  try {
    const { eventId } = await req.json();

    const teams = await prisma.team.findMany({
      where: { eventId },
      include: {
        participants: {
          select: {
            id: true,
            email: true,
            role: true,
            storageUrl:true
          },
        },
        scores: true,
      },
    });
    console.log(teams)
    return NextResponse.json({ teams });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error fetching teams" }, { status: 500 });
  }
}
