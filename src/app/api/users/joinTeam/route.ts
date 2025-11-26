// // app/api/team/join/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/dbConfig/dbConfig";

// export async function POST(req: NextRequest) {
//   try {
//     const { userId, eventId, joinCode } = await req.json();
//     console.log(joinCode)
//     console.log(eventId)
//     console.log(userId)
//     if(!userId || !joinCode || !eventId){
//         return NextResponse.json({error:"Details not found"},{status:402})
//     }
//     const team = await prisma.team.findFirst({
//       where: { name: joinCode, eventId },
//     });
//     console.log("team")
//     if (!team) {
//       return NextResponse.json({ error: "Team not found" }, { status: 404 });
//     }

//     await prisma.user.update({
//       where: { id: userId },
//       data: { teamId: team.id },
//     });

//     await prisma.team.update({
//       where: { id: team.id },
//       data: {
//         participants: { connect: { id: userId } },
//       },
//     });

//     return NextResponse.json({ message: "Joined team successfully" });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
//   }
// }


// app/api/team/join/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";
import { AxiosError } from "axios";
import { Prisma } from "@/generated/prisma";

export async function POST(req: NextRequest) {
  try {
    const { userId, eventId, joinCode } = await req.json();

    if (!userId || !joinCode || !eventId) {
      return NextResponse.json(
        { error: "Details not found" },
        { status: 400 }
      );
    }

    // 1. Find the team using the composite unique constraint (eventId + name)
    const team = await prisma.team.findUnique({
      where: {
        eventId_name: {
          eventId: eventId,
          name: joinCode, // Assuming team name is the join code
        },
      },
    });

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    // 2. Update the User's EventRole to link them to this Team
    // We assume the user has already "joined" the event (has an EventRole row) 
    // and is now just picking a team.
    await prisma.eventRole.update({
      where: {
        userId_eventId: {
          userId: Number(userId),
          eventId: eventId,
        },
      },
      data: {
        teamId: team.id,
      },
    });

    return NextResponse.json({ message: "Joined team successfully" });
  } catch (err: unknown) {
     if (err instanceof Prisma.PrismaClientKnownRequestError) {

    // Prisma error P2025 means "Record to update not found"
    // This happens if the user hasn't joined the event using the participant code yet
    if (err.code === 'P2025') {
      return NextResponse.json(
        { error: "User is not a participant in this event yet." },
        { status: 403 }
      );
    }
  }
    console.error(err);

    return NextResponse.json({ error: "Failed to join team" }, { status: 500 });
  }
}