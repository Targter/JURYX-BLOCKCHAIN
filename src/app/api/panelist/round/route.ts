// app/api/panelist/rounds/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';

export async function GET(request: Request) {


  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId')
  const eventId = searchParams.get('eventId');
  console.log(userId,eventId)
  if (!eventId) {
    return NextResponse.json({ error: 'Event ID required' }, { status: 400 });
  }

  try {
    // Verify user is a panelist for this event
    const ab  = await prisma.panelistCode.findMany({where:{
     eventId
    }})
    console.log(ab,"ab Error")
    const panelist = await prisma.panelistCode.findFirst({
      where: {
        eventId : eventId,
        userId: Number(userId)
      }
    });

    if (!panelist) {
      return NextResponse.json({ error: 'Not authorized as panelist' }, { status: 403 });
    }

    // Get all rounds for the event
    const rounds = await prisma.round.findMany({
      where: { eventId },
      orderBy: { order: 'asc' },
      include: {
        scores: {
          where: {
            panelistId: Number(userId)
          },
          include: {
            team: true
          }
        }
      }
    });

    return NextResponse.json({ rounds });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch rounds' },
      { status: 500 }
    );
  }
}