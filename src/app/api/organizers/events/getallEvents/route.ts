import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'

export async function POST(req: NextRequest) {
  try {
    // Assuming the organizerId is passed as a query parameter (could also be from the session)
    const {organizerId} = await req.json(); // For now, hardcoding it, but you can fetch it dynamically from the session
    console.log(organizerId)

    // Fetch events associated with the given organizerId
    const events = await prisma.event.findMany({
      where: {
        organizerId: organizerId,
      },
      select: {
        id: true,
        name: true,
      },
    })

    // Return the events associated with the organizer
    return NextResponse.json(events)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching events' }, { status: 500 })
  }
}
