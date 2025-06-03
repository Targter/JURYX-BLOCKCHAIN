import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface UserDataResponse {
  userId?: string;
  userRole?: string;
  eventId?: string;
  error?: string;
}

export async function GET(): Promise<NextResponse<UserDataResponse>> {
  const cookieStore = await cookies();
  const userId = cookieStore.get('user_id')?.value;
  const userRole = cookieStore.get('user_role')?.value;
  const eventId = cookieStore.get('event_id')?.value;
  const emailId = cookieStore.get('user_email')?.value;

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // Return minimal non-sensitive data (intentionally excluding email)
  return NextResponse.json({
    userId,
    userRole,
    eventId,emailId
  });
}