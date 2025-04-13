import { prisma } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { loginData } = body;

    const { email, password, role } = loginData;
    console.log(role)
    // Check if user already exists

    let route = "/";
      console.log('user:role',role)
    if (role === "USER") {
    route = "/user/dashboard";
    } else if (role === "PANELIST") {
    route = "/panelist";
    } else if (role === "ORGANIZER") {
    route = "/organizer";
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      // ✅ User exists → Log in
      return NextResponse.json({
        message: "Login successful",
        user: existingUser,
        route
      });
    } else {
      // 🆕 User does not exist → Create one
      const newUser = await prisma.user.create({
        data: {
          email,
          password, // 👉 Consider hashing in production
          role,
        },
      });

    

    console.log("router:",route)
      return NextResponse.json({
        message: "New user created",
        user: newUser,
        route
      });
    }
  } catch (error: any) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
