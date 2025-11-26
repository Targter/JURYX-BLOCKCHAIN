"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useUserDetails } from '@/stores/userStore';
import { useUserDetails } from "@/hooks/useStore";
type Role = "USER" | "ORGANIZER" | "PANELIST";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, clearUser } = useUserDetails();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const response = await fetch("/api/auth/session");

        if (response.ok) {
          const sessionData = await response.json();
          console.log("session details from AuthProvider:", sessionData);
          setUser({
            id: Number(sessionData.userId),
            email: sessionData.emailId, // Only if explicitly returned by API
            role: sessionData.userRole as Role,
            eventId: sessionData.eventId,
          });
        } else {
          clearUser();
          if (window.location.pathname.startsWith("/protected")) {
            router.push("/login");
          }
        }
      } catch (error) {
        clearUser();
        console.error("Session fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserSession();
  }, [setUser, clearUser, router]);
  if (loading) {
    return (
      <div className="min-h-[100vh] w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden font-mono">
        {/* --- Background Ambience --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* --- Loader Visual --- */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-16 h-16 mb-8">
            {/* Outer Rotating Ring */}
            <div className="absolute inset-0 border-2 border-t-indigo-500 border-r-transparent border-b-indigo-500/30 border-l-transparent rounded-full animate-spin duration-1000"></div>

            {/* Inner Counter-Rotating Ring */}
            <div className="absolute inset-2 border-2 border-t-transparent border-r-cyan-500 border-b-transparent border-l-cyan-500/30 rounded-full animate-[spin_1s_linear_infinite_reverse]"></div>

            {/* Central Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
            </div>
          </div>

          {/* --- Text Feedback --- */}
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm font-bold text-white tracking-[0.2em] uppercase animate-pulse">
              System Initializing
            </h3>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span>Establishing Secure Connection...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
