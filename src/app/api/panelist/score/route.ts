// // app/api/panelist/scores/route.ts
// import { NextResponse } from 'next/server';
// import { prisma } from '@/dbConfig/dbConfig';
// // import { getServerSession } from 'next-auth';
// // import { authOptions } from '@/lib/auth';

// export async function POST(request: Request) {
 

//   try {
//     const body = await request.json();
//     const { roundId, teamId, marks, remarks ,userId} = body;

//     // Validate input
//     if (!roundId || !teamId || marks === undefined) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     // Check if panelist is authorized for this round
//     const round = await prisma.round.findUnique({
//       where: { id: roundId },
//       include: {
//         event: {
//           include: {
//             panelistCode: {
//               where: {
//                 userId: Number(userId)
//               }
//             }
//           }
//         }
//       }
//     });

//     const panelistUserId = round?.event?.panelistCode?.userId

//     if (!panelistUserId || panelistUserId !== Number(userId)) {
//       return NextResponse.json({ error: 'Not authorized for this round' }, { status: 403 })
//     }

//     // Create or update score
//     const existingScore = await prisma.score.findFirst({
//       where: {
//         roundId,
//         teamId,
//         panelistId: Number(userId)
//       }
//     });

//     const score = existingScore
//       ? await prisma.score.update({
//           where: { id: existingScore.id },
//           data: { marks, remarks }
//         })
//       : await prisma.score.create({
//           data: {
//             marks,
//             remarks,
//             roundId,
//             teamId,
//             panelistId: Number(userId)
//           }
//         });

//     return NextResponse.json({ score });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Failed to submit score' },
//       { status: 500 }
//     );
//   }
// }


// app/api/panelist/scores/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';
// import { Role } from '@prisma/client';
import { Role } from '@/generated/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { roundId, teamId, marks, remarks, userId } = body;

    // 1. Validate input
    if (!roundId || !teamId || marks === undefined || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Fetch the Round to get the associated Event ID
    const round = await prisma.round.findUnique({
      where: { id: roundId },
      select: { eventId: true }
    });

    if (!round) {
      return NextResponse.json({ error: 'Round not found' }, { status: 404 });
    }

    // 3. Find the Panelist's EventRole
    // We need the EventRole ID because the Score table links to EventRole, not User.
    const panelistRole = await prisma.eventRole.findUnique({
      where: {
        userId_eventId: {
          userId: Number(userId),
          eventId: round.eventId
        }
      }
    });

    // 4. Authorization Check
    // Ensure the user exists in this event and is actually a PANELIST
    if (!panelistRole || panelistRole.role !== Role.PANELIST) {
      return NextResponse.json({ error: 'Not authorized as panelist for this event' }, { status: 403 });
    }

    // 5. Conflict of Interest Check (Optional but recommended)
    // Prevent panelists from scoring their own team (if they somehow have a teamId assigned)
    if (panelistRole.teamId === teamId) {
      return NextResponse.json({ error: 'Conflict of Interest: You cannot score your own team' }, { status: 403 });
    }

    // 6. Create or Update Score using Upsert
    // The schema has a unique constraint: @@unique([panelistId, roundId, teamId])
    const score = await prisma.score.upsert({
      where: {
        panelistId_roundId_teamId: {
          panelistId: panelistRole.id, // CRITICAL: Use EventRole ID (String), not User ID
          roundId: roundId,
          teamId: teamId
        }
      },
      update: {
        marks: Number(marks),
        remarks: remarks
      },
      create: {
        marks: Number(marks),
        remarks: remarks,
        roundId: roundId,
        teamId: teamId,
        panelistId: panelistRole.id // CRITICAL: Use EventRole ID
      }
    });

    return NextResponse.json({ score });

  } catch (error) {
    console.error("Submit score error:", error);
    return NextResponse.json(
      { error: 'Failed to submit score' },
      { status: 500 }
    );
  }
}