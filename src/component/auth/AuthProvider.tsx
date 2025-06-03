"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useUserDetails } from '@/stores/userStore';
import { useUserDetails } from '@/hooks/useStore';
  type Role = 'USER' | 'ORGANIZER' | 'PANELIST'
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, clearUser } = useUserDetails();
  const router = useRouter();

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const response = await fetch('/api/auth/session');
        
        if (response.ok) {
          const sessionData = await response.json();
          console.log("this is the serssion details:",sessionData)
          setUser({
            id: Number(sessionData.userId),
            email: sessionData.emailId, // Only if explicitly returned by API
            role: sessionData.userRole as Role,
            eventId: sessionData.eventId ,
          });
        } else {
          clearUser();
          if (window.location.pathname.startsWith('/protected')) {
            router.push('/login');
          }
        }
      } catch (error) {
        clearUser();
        console.error('Session fetch error:', error);
      }
    };

    fetchUserSession();
  }, [setUser, clearUser, router]);

  return <>{children}</>;
}