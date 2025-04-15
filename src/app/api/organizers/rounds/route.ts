import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'

export async function POST(req: NextRequest) {
  const { name, eventId } = await req.json()

  const roundCount = await prisma.round.count({ where: { eventId } })

  const round = await prisma.round.create({
    data: {
      name,
      order: roundCount + 1,
      eventId,
    },
  })

  return NextResponse.json(round)
}
