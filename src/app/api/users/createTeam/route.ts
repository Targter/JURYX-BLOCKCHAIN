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
import { Prisma } from "@/generated/prisma";

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
  } catch (err: unknown) {
    console.error("Create Team Error:", err);

    // 2. Proper Type Guard for Prisma Errors
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002: Unique constraint failed (Team name already exists in this event)
      if (err.code === "P2002") {
        return NextResponse.json(
          { error: "A team with this name already exists in this event." },
          { status: 409 }
        );
      }

      // P2025: Record to connect not found (User hasn't joined the event yet)
      if (err.code === "P2025") {
        return NextResponse.json(
          { error: "User has not joined this event yet." },
          { status: 404 }
        );
      }
    return NextResponse.json({ error: "Failed to create team" }, { status: 500 });
  }
  }
}
  // Use the Edge runtime in production (optional, remove if using Node serverless)
  export const config = { runtime: "edge" };