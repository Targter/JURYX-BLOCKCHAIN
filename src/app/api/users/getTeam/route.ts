// // app/api/users/getTeam/route.ts
// import { NextResponse } from 'next/server';
// import { prisma } from '@/dbConfig/dbConfig';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const eventId = searchParams.get('eventId');
//   const userId = searchParams.get('userId');

//   // Validate input
//   if (!eventId || !userId) {
//     return NextResponse.json(
//       { error: "Missing required fields" },
//       { status: 400 }
//     );
//   }

//   try {
//     // Fetch the user with their associated team for the given event
//     const userWithTeam = await prisma.user.findUnique({
//       where: { id: Number(userId) },
//       include: {
//         team: {
//           where: {
//             eventId: String(eventId),
//           },
//           include: {
//             participants: true,
//           },
//         },
//       },
//     });

//     // Check if user is part of a team
//     if (!userWithTeam?.team) {
//       return NextResponse.json(
//         { error: "No team found for this user in the event" },
//         { status: 404 }
//       );
//     }

//     // Return the team information
//     return NextResponse.json({
//       team: {
//         id: userWithTeam.team.id,
//         name: userWithTeam.team.name,
//         participants: userWithTeam.team.participants,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Failed to get team for user" },
//       { status: 500 }
//     );
//   }
// }

// // If you need to handle other methods, add them as named exports
// export async function POST() {
//   return NextResponse.json(
//     { error: "Method not allowed" },
//     { status: 405 }
//   );
// }


import { NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get('eventId');
  const userId = searchParams.get('userId');

  // Validate input
  if (!eventId || !userId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // NEW SCHEMA QUERY:
    // We look for the unique EventRole for this specific User and Event.
    const userEventRole = await prisma.eventRole.findUnique({
      where: {
        userId_eventId: {
          userId: Number(userId),
          eventId: String(eventId),
        }
      },
      include: {
        team: {
          include: {
            // 'members' are the EventRoles of people in this team
            members: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    // add other user fields if needed (e.g. name if you added it)
                  }
                }
              }
            },
          },
        },
      },
    });

    // Check if the EventRole exists AND if it has a Team assigned
    if (!userEventRole || !userEventRole.team) {
      return NextResponse.json(
        { error: "No team found for this user in the event" },
        { status: 404 }
      );
    }

    // MAP RESPONSE:
    // The previous schema likely returned a list of users directly. 
    // Now we must map over 'members' (EventRoles) to extract the 'user' object.
    const participants = userEventRole.team.members.map((member) => member.user);
    console.log("Participants:", participants);
    console.log("StorageUrl:", userEventRole.team.storageUrl);
    return NextResponse.json({
      team: {
        id: userEventRole.team.id,
        name: userEventRole.team.name,
        description: userEventRole.team.description,
        storageUrl: userEventRole.team.storageUrl,
        isPublic: userEventRole.team.isPublic,
        participants: participants,
      },
    });

  } catch (error) {
    console.error("Error fetching team:", error);
    return NextResponse.json(
      { error: "Failed to get team for user" },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}