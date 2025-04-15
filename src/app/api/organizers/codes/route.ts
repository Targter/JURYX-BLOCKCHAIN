import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'
import { nanoid } from 'nanoid'

export async function POST(req: NextRequest) {
  const { eventId } = await req.json()

  const newPanelistCode = nanoid(6)
  const newParticipantCode = nanoid(6)

  // Check if codes already exist
  const existingPanelistCode = await prisma.panelistCode.findUnique({
    where: { eventId },
  })

  const existingParticipantCode = await prisma.participantCode.findUnique({
    where: { eventId },
  })

  if (existingPanelistCode) {
    await prisma.panelistCode.update({
      where: { eventId },
      data: { code: newPanelistCode },
    })
  } else {
    await prisma.panelistCode.create({
      data: { code: newPanelistCode, eventId },
    })
  }

  if (existingParticipantCode) {
    await prisma.participantCode.update({
      where: { eventId },
      data: { code: newParticipantCode },
    })
  } else {
    await prisma.participantCode.create({
      data: { code: newParticipantCode, eventId },
    })
  }

  return NextResponse.json({
    panelistCode: newPanelistCode,
    participantCode: newParticipantCode,
  })
}
