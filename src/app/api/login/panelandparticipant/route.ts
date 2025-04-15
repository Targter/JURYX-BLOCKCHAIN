import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/dbConfig/dbConfig';
// import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { loginData, code, eventId, role } = await req.json();

    // ORGANIZER LOGIN
    if (role === 'ORGANIZER') {
      const { email, password } = loginData;

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || user.role !== 'ORGANIZER') {
        return NextResponse.json({ error: 'Invalid organizer credentials' }, { status: 401 });
      }

      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) {
      //   return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      // }

      return NextResponse.json({
        user,
        route: '/organizer/dashboard',
      });
    }

    // PARTICIPANT / PANELIST LOGIN
    if (!eventId || !code) {
      return NextResponse.json({ error: 'Event ID and code are required' }, { status: 400 });
    }

    if (role === 'USER') {
      const participantCode = await prisma.participantCode.findUnique({
        where: { eventId },
        include: { event: true },
      });

      if (!participantCode || participantCode.code !== code) {
        return NextResponse.json({ error: 'Invalid participant code or event ID' }, { status: 401 });
      }

      const user = await prisma.user.findFirst({
        where: {
          role: 'USER',
          team: { eventId },
        },
      });

      if (!user) {
        return NextResponse.json({ error: 'Participant not found for event' }, { status: 404 });
      }

      return NextResponse.json({
        user,
        route: `/event/${eventId}/user/upload`,
      });
    }

    if (role === 'PANELIST') {
      const panelistCode = await prisma.panelistCode.findUnique({
        where: { eventId },
        include: { event: true },
      });

      if (!panelistCode || panelistCode.code !== code) {
        return NextResponse.json({ error: 'Invalid panelist code or event ID' }, { status: 401 });
      }

      const user = await prisma.user.findFirst({
        where: {
          role: 'PANELIST',
          scores: {
            some: {
              round: { eventId },
            },
          },
        },
      });

      if (!user) {
        return NextResponse.json({ error: 'Panelist not found for event' }, { status: 404 });
      }

      return NextResponse.json({
        user,
        route: `/event/${eventId}/panelist`,
      });
    }

    return NextResponse.json({ error: 'Invalid role' }, { status: 400 });

  } catch (err: any) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Something went wrong during login' }, { status: 500 });
  }
}
