// app/api/panelist/scores/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
 

  try {
    const body = await request.json();
    const { roundId, teamId, marks, remarks ,userId} = body;

    // Validate input
    if (!roundId || !teamId || marks === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if panelist is authorized for this round
    const round = await prisma.round.findUnique({
      where: { id: roundId },
      include: {
        event: {
          include: {
            panelistCode: {
              where: {
                userId: Number(userId)
              }
            }
          }
        }
      }
    });

    const panelistUserId = round?.event?.panelistCode?.userId

    if (!panelistUserId || panelistUserId !== Number(userId)) {
      return NextResponse.json({ error: 'Not authorized for this round' }, { status: 403 })
    }

    // Create or update score
    const existingScore = await prisma.score.findFirst({
      where: {
        roundId,
        teamId,
        panelistId: Number(userId)
      }
    });

    const score = existingScore
      ? await prisma.score.update({
          where: { id: existingScore.id },
          data: { marks, remarks }
        })
      : await prisma.score.create({
          data: {
            marks,
            remarks,
            roundId,
            teamId,
            panelistId: Number(userId)
          }
        });

    return NextResponse.json({ score });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to submit score' },
      { status: 500 }
    );
  }
}