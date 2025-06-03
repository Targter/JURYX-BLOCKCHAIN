// import { prisma } from "@dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { role } = body;

//     let route = "/";


    
//     if (role === "ORGANIZER") route = "/organizer";

//     if (role === "ORGANIZER") {
//       const { loginData } = body;
//       const { email, password } = loginData;

//       let existingUser = await prisma.user.findUnique({ where: { email } });

//       if (!existingUser) {
//         existingUser = await prisma.user.create({
//           data: {
//             email,
//             password,
//             role,
//           },
//         });
//       }


//       return NextResponse.json({
//         message: "Login successful",
//         user: existingUser,
//         route,
//       });
//     }

//     // PANELIST or USER login using eventId + code
//     else{
//       const { eventId, code, email, password } = body;
    
//     if (role === "USER") route = `/event/${eventId}/user`;
//     else if (role === "PANELIST") route = `/event/${eventId}/panelist`;
//     if (!eventId || !code || !email || !password) {
//       return NextResponse.json(
//         { error: "Missing credentials" },
//         { status: 400 }
//       );
//     }

//     let codeRecord = null;
//     if (role === "PANELIST") {
//       console.log("panelist")
//       codeRecord = await prisma.panelistCode.findUnique({
//         where: { eventId },
//         include: { event: true },
//       });

//       if (!codeRecord || codeRecord.code !== code) {
//         return NextResponse.json(
//           { error: "Invalid panelist login code" },
//           { status: 401 }
//         );
//       }
//     } else if (role === "USER") {
//       console.log("userCalled")
//       codeRecord = await prisma.participantCode.findUnique({
//         where: { eventId },
//         include: { event: true },
//       });
//       console.log("c:",codeRecord)

//       if (!codeRecord || codeRecord.code !== code) {
//         return NextResponse.json(
//           { error: "Invalid participant login code" },
//           { status: 401 }
//         );
//       }
//     }

//     let user = await prisma.user.findUnique({ where: { email } });

//     if (!user) {
//       user = await prisma.user.create({
//         data: {
//           email,
//           password,
//           role,
//         },
//       });

//       // Link code to this user
//       if (role === "PANELIST") {
//         const ab = await prisma.panelistCode.update({
//           where: { eventId },
//           data: { userId: user.id },
//         });
//         console.log("loginAb:",ab)
        
//       } else if (role === "USER") {
//         await prisma.participantCode.update({
//           where: { eventId },
//           data: { userId: user.id },
//         });
//       }
//     }
//     return NextResponse.json({
//       message: "Login successful",
//       user,
//       route,
//     });
//     }

//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }



// new updated code with cookies

import { prisma } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

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

      // Set cookies for organizer
      const cookieStore = await cookies();
      cookieStore.set('user_id', existingUser.id.toString(), { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 // 7 days
      });
      cookieStore.set('user_role', existingUser.role, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });
      cookieStore.set('user_email', existingUser.email, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });

      return NextResponse.json({
        message: "Login successful",
        user: existingUser,
        route,
      });
    }

    // PANELIST or USER login using eventId + code
    else {
      const { eventId, code, email, password } = body;
    
      if (role === "USER") route = `/event/${eventId}/user`;
      else if (role === "PANELIST") route = `/event/${eventId}/panelist`;
      if (!eventId || !code || !email || !password) {
        return NextResponse.json(
          { error: "Missing credentials" },
          { status: 400 }
        );
      }

      let codeRecord = null;
      if (role === "PANELIST") {
        console.log("panelist")
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
          const ab = await prisma.panelistCode.update({
            where: { eventId },
            data: { userId: user.id },
          });
          console.log("loginAb:",ab)
          
        } else if (role === "USER") {
          await prisma.participantCode.update({
            where: { eventId },
            data: { userId: user.id },
          });
        }
      }

      // Set cookies for panelist or user
      const cookieStore = await cookies();
      cookieStore.set('user_id', user.id.toString(), { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });
      cookieStore.set('user_role', user.role, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });
      console.log("userEmail:",user.email)
      cookieStore.set('user_email', user.email, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 
      });

      return NextResponse.json({
        message: "Login successful",
        user,
        route,
      });
    }

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}