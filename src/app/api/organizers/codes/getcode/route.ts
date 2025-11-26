// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/dbConfig/dbConfig'

// export async function POST(req: NextRequest) {
//   const { eventId } = await req.json()

//   const panelistCode = await prisma.panelistCode.findUnique({ where: { eventId } })
//   const participantCode = await prisma.participantCode.findUnique({ where: { eventId } })

//   return NextResponse.json({
//     panelistCode: panelistCode?.code || null,
//     participantCode: participantCode?.code || null,
//   })
// }


import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'

export async function POST(req: NextRequest) {
  try {
    const { eventId } = await req.json()

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    // Fetch the event directly and select only the code fields
    const event = await prisma.event.findUnique({
      where: { id: eventId },
      select: {
        panelistCode: true,
        participantCode: true
      }
    })

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({
      panelistCode: event.panelistCode || null,
      participantCode: event.participantCode || null,
    })

  } catch (error) {
    console.error("Error fetching codes:", error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}