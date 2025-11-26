// // app/api/panelist/teams/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/dbConfig/dbConfig";

// export async function POST(req: NextRequest) {
//   try {
//     const { eventId } = await req.json();

//     const teams = await prisma.team.findMany({
//       where: { eventId },
//       include: {
//         participants: {
//           select: {
//             id: true,
//             email: true,
//             role: true,
//             storageUrl:true
//           },
//         },
//         scores: true,
//       },
//     });
//     console.log(teams)
//     return NextResponse.json({ teams });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Error fetching teams" }, { status: 500 });
//   }
// }



// app/api/panelist/teams/route.ts


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/dbConfig/dbConfig";

export async function POST(req: NextRequest) {
  try {
    const { eventId } = await req.json();

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    const rawTeams = await prisma.team.findMany({
      where: { eventId },
      include: {
        // 1. Fetch members via the EventRole table
        members: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
        // 2. Fetch scores associated with the team
        scores: true,
      },
    });

    // 3. Transform data to a cleaner format for the frontend
    // Flatten the 'members' array to look like a simple list of participants
    const teams = rawTeams.map((team) => ({
      id: team.id,
      name: team.name,
      description: team.description,
      storageUrl: team.storageUrl, // Now on the Team model
      isPublic: team.isPublic,
      scores: team.scores,
      participants: team.members.map((member) => ({
        id: member.user.id,
        email: member.user.email,
        role: member.role, // Role comes from EventRole
      })),
    }));

    return NextResponse.json({ teams });
  } catch (err) {
    console.error("Error fetching teams:", err);
    return NextResponse.json({ error: "Error fetching teams" }, { status: 500 });
  }
}