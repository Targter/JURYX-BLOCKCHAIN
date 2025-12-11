// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/dbConfig/dbConfig'

// export async function POST(req: NextRequest) {
//     console.log('eventsCaleld')
//   const { name ,organizerId } = await req.json()
//   console.log("name:",name)

//   const event = await prisma.event.create({
//     data: {
//       name,
//       organizerId,
//     },
//   })
//   console.log("event:",event)


//   return NextResponse.json({message:"ab"})
// }


import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'
// import { Role } from '@prisma/client' // Import Role enum for type safety
import { Role } from '@/generated/prisma';
import crypto from 'crypto' // To generate random unique codes

export async function POST(req: NextRequest) {
  try {
    console.log('Create Event Called')
    
    const { name, organizerId } = await req.json()
    console.log("name:", name, "organizerId:", organizerId)

    if (!name || !organizerId) {
      return NextResponse.json({ error: "Missing name or organizerId" }, { status: 400 });
    }

    // 1. Generate unique codes for this event
    // (Using a simple random string generator)
    const participantCode = crypto.randomBytes(3).toString('hex').toUpperCase(); // e.g., "A1B2C3"
    const panelistCode = crypto.randomBytes(3).toString('hex').toUpperCase();    // e.g., "9F8E7D"

    // 2. Create Event AND Link Organizer in one transaction
    const event = await prisma.event.create({
      data: {
        name: name,
        participantCode: participantCode,
        panelistCode: panelistCode,
        // "participants" refers to the EventRole relation in your schema
        participants: {
          create: {
            userId: Number(organizerId), // Ensure ID is a number
            role: Role.ORGANIZER         // Set their role to ORGANIZER
          }
        }
      },
    })

    console.log("Event Created:", event)

    return NextResponse.json({ 
      message: "Event created successfully", 
      event 
    })

  } catch (error) {
    console.error("Error creating event:", error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}