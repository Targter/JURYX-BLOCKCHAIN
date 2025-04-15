import { prisma } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { role } = body;

    let route = "/";
    if (role === "ORGANIZER") route = "/organizer";

    if (role === "ORGANIZER") {
      const { loginData } = body;
      const { email, password } = loginData;

      let existingUser = await prisma.user.findUnique({ where: { email } });

      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            email,
            password,
            role,
          },
        });
      }

      return NextResponse.json({
        message: "Login successful",
        user: existingUser,
        route,
      });
    }

    // PANELIST or USER login using eventId + code
    const { eventId, code, email, password } = body;
    
    if (role === "USER") route = `/event/${eventId}/user/upload`;
    else if (role === "PANELIST") route = `/event/${eventId}/panelist`;
    if (!eventId || !code || !email || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    let codeRecord = null;
    if (role === "PANELIST") {
      codeRecord = await prisma.panelistCode.findUnique({
        where: { eventId },
        include: { event: true },
      });

      if (!codeRecord || codeRecord.code !== code) {
        return NextResponse.json(
          { error: "Invalid panelist login code" },
          { status: 401 }
        );
      }
    } else if (role === "USER") {
      console.log("userCalled")
      codeRecord = await prisma.participantCode.findUnique({
        where: { eventId },
        include: { event: true },
      });
      console.log("c:",codeRecord)

      if (!codeRecord || codeRecord.code !== code) {
        return NextResponse.json(
          { error: "Invalid participant login code" },
          { status: 401 }
        );
      }
    }

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          password,
          role,
        },
      });

      // Link code to this user
      if (role === "PANELIST") {
        await prisma.panelistCode.update({
          where: { eventId },
          data: { userId: user.id },
        });
      } else if (role === "USER") {
        await prisma.participantCode.update({
          where: { eventId },
          data: { userId: user.id },
        });
      }
    }

    return NextResponse.json({
      message: "Login successful",
      user,
      route,
    });
  } catch (error: any) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
