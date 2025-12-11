// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/dbConfig/dbConfig'
// import { nanoid } from 'nanoid'

// export async function POST(req: NextRequest) {
//   const { eventId } = await req.json()

//   const newPanelistCode = nanoid(6)
//   const newParticipantCode = nanoid(6)

//   // Check if codes already exist
//   const existingPanelistCode = await prisma.panelistCode.findUnique({
//     where: { eventId },
//   })

//   const existingParticipantCode = await prisma.participantCode.findUnique({
//     where: { eventId },
//   })

//   if (existingPanelistCode) {
//     await prisma.panelistCode.update({
//       where: { eventId },
//       data: { code: newPanelistCode },
//     })
//   } else {
//     await prisma.panelistCode.create({
//       data: { code: newPanelistCode, eventId },
//     })
//   }

//   if (existingParticipantCode) {
//     await prisma.participantCode.update({
//       where: { eventId },
//       data: { code: newParticipantCode },
//     })
//   } else {
//     await prisma.participantCode.create({
//       data: { code: newParticipantCode, eventId },
//     })
//   }

//   return NextResponse.json({
//     panelistCode: newPanelistCode,
//     participantCode: newParticipantCode,
//   })
// }



import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'
import { nanoid } from 'nanoid'

export async function POST(req: NextRequest) {
  try {
    const { eventId } = await req.json()

    if (!eventId) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    // 1. Generate new codes
    const newPanelistCode = nanoid(6)
    const newParticipantCode = nanoid(6)

    // 2. Update the Event directly
    // This replaces the old logic of checking/creating in separate tables
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: { 
        panelistCode: newPanelistCode,
        participantCode: newParticipantCode 
      },
      select: {
        panelistCode: true,
        participantCode: true
      }
    })

    return NextResponse.json({
      panelistCode: updatedEvent.panelistCode,
      participantCode: updatedEvent.participantCode,
    })

  } catch (error) {
    console.error("Error generating codes:", error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}