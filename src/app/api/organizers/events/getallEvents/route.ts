// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/dbConfig/dbConfig'

// export async function POST(req: NextRequest) {
//   try {
//     // Assuming the organizerId is passed as a query parameter (could also be from the session)
//     const {organizerId} = await req.json(); // For now, hardcoding it, but you can fetch it dynamically from the session
//     console.log(organizerId)

//     // Fetch events associated with the given organizerId
//     const events = await prisma.event.findMany({
//       where: {
//         organizerId: organizerId,
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     })

//     // Return the events associated with the organizer
//     return NextResponse.json(events)
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ message: 'Error fetching events' }, { status: 500 })
//   }
// }

// export async function GET(){
//   const events = await prisma.event.findMany();
//   return NextResponse.json(events);
// }


import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'
// import { Role } from '@prisma/client' // Import the Role enum
import { Role } from '@/generated/prisma';

// POST: Get events specific to a logged-in Organizer
export async function POST(req: NextRequest) {
  try {
    const { organizerId } = await req.json();

    // Ensure organizerId is a number (User.id is Int in your schema)
    const userId = Number(organizerId);

    if (isNaN(userId)) {
      return NextResponse.json({ message: 'Invalid organizer ID' }, { status: 400 });
    }

    // Fetch events where this specific user is an "ORGANIZER"
    const events = await prisma.event.findMany({
      where: {
        participants: {
          some: {
            userId: userId,
            role: Role.ORGANIZER 
          }
        }
      },
      select: {
        id: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true,
        // You can also grab the codes if the organizer needs to see them
        participantCode: true, 
        panelistCode: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error("Error fetching organizer events:", error)
    return NextResponse.json({ message: 'Error fetching events' }, { status: 500 })
  }
}

// GET: Fetch ALL events (admin view or generic listing)
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      // You might want to hide codes if this is a public endpoint
      select: {
        id: true,
        name: true,
        description: true,
        isActive: true,
        createdAt: true
      }
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching all events:", error);
    return NextResponse.json({ message: 'Error fetching events' }, { status: 500 });
  }
}