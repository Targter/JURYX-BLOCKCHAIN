import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'

export async function POST(req: NextRequest) {
  const { eventId } = await req.json()

  const panelistCode = await prisma.panelistCode.findUnique({ where: { eventId } })
  const participantCode = await prisma.participantCode.findUnique({ where: { eventId } })

  return NextResponse.json({
    panelistCode: panelistCode?.code || null,
    participantCode: participantCode?.code || null,
  })
}
