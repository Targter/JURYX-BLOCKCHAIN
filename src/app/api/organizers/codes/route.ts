import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';
import { nanoid } from 'nanoid';

export async function POST(req: NextRequest) {
  try {
    const { eventId, userId } = await req.json();

    if (!eventId || !userId) {
      return NextResponse.json(
        { error: "Missing eventId or userId" },
        { status: 400 }
      );
    }

    const newPanelistCode = nanoid(6);
    const newParticipantCode = nanoid(6);

    // Check and update/create PanelistCode
    const panelistCode = await prisma.panelistCode.findUnique({
      where: { userId },
    });
    
    if (panelistCode) {
      await prisma.panelistCode.update({
        where: { userId },
        data: { code: newPanelistCode, eventId },
      });
    } else {
      await prisma.panelistCode.create({
        data: {
          code: newPanelistCode,
          eventId,
          userId,
        },
      });
    }

    // Check and update/create ParticipantCode
    const participantCode = await prisma.participantCode.findUnique({
      where: { userId },
    });

    if (participantCode) {
      await prisma.participantCode.update({
        where: { userId },
        data: { code: newParticipantCode, eventId },
      });
    } else {
      await prisma.participantCode.create({
        data: {
          code: newParticipantCode,
          eventId,
          userId,
        },
      });
    }

    return NextResponse.json({
      message: "Codes generated successfully",
      panelistCode: newPanelistCode,
      participantCode: newParticipantCode,
    });
  } catch (error: any) {
    console.error("Error generating codes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
