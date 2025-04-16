// app/event/[eventId]/user/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import axios from "axios";
import { useUserDetails } from "@/hooks/useStore";
interface Team {
    id: string;
    name: string;
    // Add other team properties here as needed
  }
export default function UserEventDashboard() {
  const { eventId } = useParams();
  const {user} = useUserDetails(); 
  console.log(user)
  const router = useRouter();
  const [teamName, setTeamName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [message, setMessage] = useState("");
  const [userTeam, setUserTeam] = useState<Team | null>(null); 
  useEffect(() => {
    // Fetch the user's team details when the component mounts
    const fetchUserTeam = async () => {
      if (user) {
        console.log("eventId:",eventId,"uId:",user.id)
        try {
          const res = await axios.get(`/api/users/getTeam?eventId=${eventId}&userId=${user.id}`);
          console.log("res:",res.data)
          if (res.data.team) {
            setUserTeam(res.data.team); // Set user team details if they exist
            // router.push(`/event/${eventId}/user/upload`); // Redirect to uploads if the user has a team
          }
        } catch (err: any) {
          console.error("Error fetching user team", err);
        }
      }
    };

    fetchUserTeam();
  }, [user, eventId, router]);
  const handleCreateTeam = async () => {
    try {
        if(!user){
            return 
        }
      const res = await axios.post("/api/users/createTeam", {
        eventId,
        name: teamName,
        userId:user.id
      });
      console.log("res.data",res.data)
      setMessage(`Team created: ${res.data.team.name}`);
      // redirect to dashboard or team detail
      router.push(`./uploads`);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Failed to create team");
    }
  };

  const handleJoinTeam = async () => {
    try {
        if(!user){
            return 
        }
      const res = await axios.post("/api/users/joinTeam", {
        eventId,
        joinCode,
        userId:user.id
      });
      console.log("resJoinTeam:",res.data)
      setMessage("Successfully joined the team!");
      router.push(`./uploads`);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Failed to join team");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
    <h1 className="text-2xl font-bold mb-6">Welcome to Event</h1>

    {/* If user has no team, show create/join options */}
    {!userTeam ? (
      <>
        <div className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Enter team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={handleCreateTeam}
            className="bg-blue-500 text-white p-2 w-full rounded"
          >
            Create Team
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter team code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={handleJoinTeam}
            className="bg-green-500 text-white p-2 w-full rounded"
          >
            Join Team
          </button>
        </div>
      </>
    ) : (
      // If the user already has a team, display team info or redirect
      <>
      
      <p className="text-green-500">You are already part of the team: {userTeam.name}</p>
      <button
            onClick={() => router.push(`/event/${eventId}/user/upload`)}
            className="mt-4 bg-blue-500 text-white p-2 w-full rounded"
          >
            Go to Uploads
          </button>
      </>
    )}

    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
  </div>
);
}