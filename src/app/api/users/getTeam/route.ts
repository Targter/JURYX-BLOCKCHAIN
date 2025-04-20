// app/api/users/getTeam/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get('eventId');
  const userId = searchParams.get('userId');

  // Validate input
  if (!eventId || !userId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Fetch the user with their associated team for the given event
    const userWithTeam = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        team: {
          where: {
            eventId: String(eventId),
          },
          include: {
            participants: true,
          },
        },
      },
    });

    // Check if user is part of a team
    if (!userWithTeam?.team) {
      return NextResponse.json(
        { error: "No team found for this user in the event" },
        { status: 404 }
      );
    }

    // Return the team information
    return NextResponse.json({
      team: {
        id: userWithTeam.team.id,
        name: userWithTeam.team.name,
        participants: userWithTeam.team.participants,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to get team for user" },
      { status: 500 }
    );
  }
}

// If you need to handle other methods, add them as named exports
export async function POST() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}