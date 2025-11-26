// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@dbConfig/dbConfig";
// // import { getUserFromToken } from "@/lib/auth"; // helper to extract user from token

// export async function POST(req: NextRequest) {
//   try {
//     const { name, eventId,userId } = await req.json();
    
//     const team = await prisma.team.create({
//       data: {
//         name,
//         eventId,
//         participants: { connect: { id: userId} },
//       },
//     });

//     await prisma.user.update({
//       where: { id: userId},
//       data: { teamId: team.id },
//     });

//     return NextResponse.json({ team });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";

export async function POST(req: NextRequest) {
  try {
    const { name, eventId, userId } = await req.json();

    if (!name || !eventId || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Create the Team and immediately link the User's EventRole to it
    const team = await prisma.team.create({
      data: {
        name,
        eventId,
        // In the new schema, 'members' refers to the EventRole relation.
        // We connect the existing EventRole for this user/event to this new team.
        members: {
          connect: {
            // Prisma allows connecting via the composite unique constraint
            userId_eventId: {
              userId: Number(userId),
              eventId: eventId
            }
          }
        },
      },
    });

    // No need for a second update query. 
    // The 'connect' above automatically sets the teamId on the EventRole.

    return NextResponse.json({ team });
  } catch (error: any) {
    console.error("Create Team Error:", error);

    // Handle unique team name constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: "A team with this name already exists in this event." },
        { status: 409 }
      );
    }

    // Handle case where User hasn't joined the event yet (EventRole doesn't exist)
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: "User has not joined this event yet." },
        { status: 404 }
      );
    }

    return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
  }
}