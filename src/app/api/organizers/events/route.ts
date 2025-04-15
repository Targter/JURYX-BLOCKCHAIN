import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/dbConfig/dbConfig'

export async function POST(req: NextRequest) {
    console.log('eventsCaleld')
  const { name ,organizerId } = await req.json()
  console.log("name:",name)

  const event = await prisma.event.create({
    data: {
      name,
      organizerId,
    },
  })
  console.log("event:",event)


  return NextResponse.json({message:"ab"})
}
