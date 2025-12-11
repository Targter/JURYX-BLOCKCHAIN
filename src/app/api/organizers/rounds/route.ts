// // import { NextRequest, NextResponse } from 'next/server'
// // import { prisma } from '@/dbConfig/dbConfig'

// // export async function POST(req: NextRequest) {
// //   const { name, eventId } = await req.json()

// //   const roundCount = await prisma.round.count({ where: { eventId } })

// //   const round = await prisma.round.create({
// //     data: {
// //       name,
// //       order: roundCount + 1,
// //       eventId,
// //     },
// //   })

// //   return NextResponse.json(round)
// // }



// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/dbConfig/dbConfig'
// import { Role } from '@/generated/prisma';


// export async function POST(req: NextRequest) {
//   try {
//     // 1. Extract new fields supported by the schema (maxScore, description)
//     const { name, eventId, maxScore, description } = await req.json()

//     if (!name || !eventId) {
//       return NextResponse.json({ error: "Name and Event ID are required" }, { status: 400 });
//     }

//     // 2. Calculate the next order number
//     // Note: In a high-traffic production app, you might want a transaction or atomic increment here, 
//     // but this works for standard use cases.
//     const roundCount = await prisma.round.count({ 
//       where: { eventId: eventId } 
//     })

//     // 3. Create the Round
//     const round = await prisma.round.create({
//       data: {
//         name,
//         description: description || null, 
//         // Parse maxScore to Int if provided, otherwise let Prisma use the @default(100)
//         maxScore: maxScore ? Number(maxScore) : undefined,
//         order: roundCount + 1,
//         eventId: eventId, // Link to the Event (String CUID)
//       },
//     })

//     return NextResponse.json(round)
//   } catch (error) {
//     console.error("Error creating round:", error)
//     return NextResponse.json(
//       { error: 'Internal server error' }, 
//       { status: 500 }
//     )
//   }
// }

// // 



// // Helper to verify Organizer permissions
// async function isOrganizer(userId: number, eventId: string) {
//   const role = await prisma.eventRole.findUnique({
//     where: {
//       userId_eventId: {
//         userId: userId,
//         eventId: eventId,
//       },
//     },
//   });
//   return role?.role === Role.ORGANIZER;
// }

// // GET: Fetch all rounds for an event
// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const eventId = searchParams.get("eventId");
//   const userId = searchParams.get("userId");

//   if (!eventId || !userId) {
//     return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//   }

//   if (!(await isOrganizer(Number(userId), eventId))) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   try {
//     const rounds = await prisma.round.findMany({
//       where: { eventId },
//       orderBy: { order: "asc" },
//     });
//     return NextResponse.json({ rounds });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch rounds" }, { status: 500 });
//   }
// }

// // PUT: Edit a round
// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { roundId, eventId, userId, name, maxScore, description } = body;

//     if (!roundId || !eventId || !userId) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     if (!(await isOrganizer(Number(userId), eventId))) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//     }

//     const updatedRound = await prisma.round.update({
//       where: { id: roundId },
//       data: {
//         name,
//         maxScore: Number(maxScore),
//         description,
//       },
//     });

//     return NextResponse.json({ round: updatedRound });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to update round" }, { status: 500 });
//   }
// }

// // DELETE: Remove a round
// export async function DELETE(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const roundId = searchParams.get("roundId");
//     const eventId = searchParams.get("eventId");
//     const userId = searchParams.get("userId");

//     if (!roundId || !eventId || !userId) {
//       return NextResponse.json({ error: "Missing fields" }, { status: 400 });
//     }

//     if (!(await isOrganizer(Number(userId), eventId))) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//     }

//     // Check if scores exist (Prevent deletion if round is active)
//     const scoreCount = await prisma.score.count({ where: { roundId } });
//     if (scoreCount > 0) {
//       return NextResponse.json(
//         { error: "Cannot delete round. Scores have already been submitted." },
//         { status: 409 }
//       );
//     }

//     await prisma.round.delete({
//       where: { id: roundId },
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to delete round" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";
// import { Role } from "@prisma/client"; // Standard import path
import { Role } from "@/generated/prisma"; // Adjusted import path

// Helper to verify Organizer permissions
async function isOrganizer(userId: number, eventId: string) {
  if (!userId || !eventId) return false;
  
  try {
    const eventRole = await prisma.eventRole.findUnique({
      where: {
        userId_eventId: {
          userId: userId,
          eventId: eventId,
        },
      },
    });
    return eventRole?.role === Role.ORGANIZER;
  } catch (error) {
    console.error("Error checking organizer role:", error);
    return false;
  }
}

// POST: Create a new round
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, eventId, maxScore, description, userId } = body;
    console.log("Creating round with data:", body);
    console.log("User ID:", userId, "Event ID:", eventId, "Name:", name, "Max Score:", maxScore, "Description:", description);
    // 1. Validation
    if (!name || !eventId || !userId) {
      return NextResponse.json({ error: "Name, Event ID, and User ID are required" }, { status: 400 });
    }

    // 2. Security Check (CRITICAL FIX)
    const authorized = await isOrganizer(Number(userId), eventId);
    if (!authorized) {
      return NextResponse.json({ error: "Unauthorized. Only organizers can create rounds." }, { status: 403 });
    }

    // 3. Logic
    const roundCount = await prisma.round.count({
      where: { eventId: eventId },
    });

    const round = await prisma.round.create({
      data: {
        name,
        description: description || null,
        maxScore: maxScore ? Number(maxScore) : 100, // Default to 100 if missing
        order: roundCount + 1,
        eventId: eventId,
      },
    });

    return NextResponse.json(round);
  } catch (error) {
    console.error("Error creating round:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET: Fetch all rounds for an event
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId");
  const userId = searchParams.get("userId");

  if (!eventId || !userId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Note: Depending on your logic, you might want Panelists/Participants 
  // to see rounds too. If so, remove this check or adjust the helper.
  // For now, keeping it strictly for Organizers as requested.
  if (!(await isOrganizer(Number(userId), eventId))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const rounds = await prisma.round.findMany({
      where: { eventId },
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ rounds });
  } catch (error) {
    console.error("Error fetching rounds:", error);
    return NextResponse.json({ error: "Failed to fetch rounds" }, { status: 500 });
  }
}

// PUT: Edit a round
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { roundId, eventId, userId, name, maxScore, description } = body;

    if (!roundId || !eventId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!(await isOrganizer(Number(userId), eventId))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedRound = await prisma.round.update({
      where: { id: roundId },
      data: {
        name,
        maxScore: Number(maxScore),
        description,
      },
    });

    return NextResponse.json({ round: updatedRound });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Failed to update round" }, { status: 500 });
  }
}

// DELETE: Remove a round
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const roundId = searchParams.get("roundId");
    const eventId = searchParams.get("eventId");
    const userId = searchParams.get("userId");

    if (!roundId || !eventId || !userId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!(await isOrganizer(Number(userId), eventId))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Integrity Check
    const scoreCount = await prisma.score.count({ where: { roundId } });
    if (scoreCount > 0) {
      return NextResponse.json(
        { error: "Cannot delete round. Scores have already been submitted." },
        { status: 409 }
      );
    }

    await prisma.round.delete({
      where: { id: roundId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Failed to delete round" }, { status: 500 });
  }
}