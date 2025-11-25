"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUserDetails } from "@/hooks/useStore";

interface Event {
  id: string;
  name: string;
  organizerId: string;
}

// Organizer Dashboard Page
export default function OrganizerPage() {
  const [eventName, setEventName] = useState("");
  const [roundName, setRoundName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [getEvents, setgetEvents] = useState<Event[]>([]);
  const { user } = useUserDetails();

  // panelist and the user code to login
  const [codeData, setCodeData] = useState<{
    panelistCode: string;
    participantCode: string;
  } | null>(null);

  // console.log("organizerUser:", user);
  const createEvent = async () => {
    // console.lo
    if (!user) {
      return;
    }
    console.log(user.id);
    console.log("called Events", eventName);
    const res = await axios.post("/api/organizers/events", {
      name: eventName,
      organizerId: user.id,
    });
    setEvents([...events, res.data]);
    setEventName("");
  };

  const createRound = async () => {
    console.log(selectedEvent);
    await axios.post("/api/organizers/rounds", {
      eventId: selectedEvent,
      name: roundName,
    });
    setRoundName("");
  };

  const generateCodes = async () => {
    console.log("Generating codes for event:", selectedEvent);
    const response = await axios.post("/api/organizers/codes", {
      eventId: selectedEvent,
    });
    console.log("codeData:", response.data);
    setCodeData(response.data); // Set both codes
    alert("Codes generated successfully!");
  };

  useEffect(() => {
    const fetchCodes = async () => {
      if (!selectedEvent) return;

      const res = await axios.post("/api/organizers/codes/getcode", {
        eventId: selectedEvent,
      }); // You'll create this next
      console.log("getCode", res.data);
      setCodeData(res.data);
    };

    fetchCodes();
  }, [selectedEvent]);

  const fetchEvents = async () => {
    console.log(user?.id);
    if (!user) {
      return;
    }
    try {
      const response = await axios.post("/api/organizers/events/getallEvents", {
        organizerId: user.id,
      });
      setgetEvents(response.data);
      console.log("getEvents:", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);
  const cardBase =
    "bg-zinc-900/60 border border-zinc-800/60 rounded-xl backdrop-blur-sm p-5 flex flex-col shadow-sm";
  const inputStyle =
    "w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block p-2.5 transition-all duration-200 outline-none placeholder-zinc-600";
  const labelStyle =
    "block mb-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest";
  const headingStyle =
    "text-base font-semibold text-white mb-1 flex items-center gap-2";
  const subTextStyle = "text-xs text-zinc-500 mb-4 leading-relaxed";

  return (
    // Height Calculation: 100vh - 64px (Navbar height)
    // overflow-hidden prevents the body scrollbar
    <div className="h-[calc(100vh-70px)] bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30 overflow-y-hidden">
      {/* Main Grid Content - Fills the exact height */}
      <main className="h-full p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-[1920px] mx-auto">
        {/* COLUMN 1: Event Structure (Sidebar) */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full min-h-0">
          {/* Create Event Section - Fixed Height (shrink-0) */}
          <div className={`${cardBase} shrink-0`}>
            <div className="mb-2">
              <h2 className={headingStyle}>
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                New Event
              </h2>
              <p className="text-[11px] text-zinc-500">
                Define a root event container.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className={labelStyle}>Event Name</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="e.g., Hackathon 2024"
                  className={inputStyle}
                />
              </div>
              <button
                onClick={createEvent}
                className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-bold py-2 px-4 rounded-lg transition-colors shadow-md text-sm"
              >
                Create Event
              </button>
            </div>
          </div>

          {/* Event List - Fills remaining space (flex-1) & Scrolls internally */}
          <div className={`${cardBase} flex-1 min-h-0`}>
            <div className="shrink-0">
              <h2 className={headingStyle}>
                <svg
                  className="w-4 h-4 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  ></path>
                </svg>
                Existing Events
              </h2>
              <p className="text-[10px] text-zinc-500 mb-3 border-b border-zinc-800 pb-2">
                Quick reference ({getEvents.length})
              </p>
            </div>

            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
              {getEvents.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center border border-dashed border-zinc-800 rounded-lg p-4">
                  <p className="text-xs text-zinc-600">No events yet.</p>
                </div>
              ) : (
                getEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-2.5 bg-zinc-950/50 border border-zinc-800/50 rounded flex justify-between items-center group hover:border-indigo-500/30 transition-all cursor-default"
                  >
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-indigo-300 truncate max-w-[70%]">
                      {ev.name}
                    </span>
                    <span className="text-[9px] bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-600 font-mono">
                      #{ev.id.slice(0, 4)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* COLUMN 2: Active Workspace (Center) */}
        <div className="lg:col-span-5 flex flex-col h-full min-h-0">
          <div className={`${cardBase} relative overflow-hidden h-full`}>
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <h2 className={headingStyle}>
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Round Management
            </h2>
            <p className={subTextStyle}>
              Configure specific rounds. Ensure the correct event context is
              selected.
            </p>

            <div className="flex flex-col gap-5 mt-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {/* Step 1: Select Context */}
              <div className="p-4 bg-zinc-950/50 border border-dashed border-zinc-800 rounded-lg shrink-0">
                <label className={labelStyle}>
                  1. Select Active Event Context
                </label>
                <div className="relative">
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className={`${inputStyle} appearance-none cursor-pointer hover:border-zinc-600`}
                  >
                    <option value="" className="text-zinc-500">
                      -- Select from dropdown --
                    </option>
                    {getEvents.map((event) => (
                      <option key={event.id} value={event.id}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2: Add Round */}
              <div className="space-y-2 shrink-0">
                <label className={labelStyle}>2. Define Round</label>
                <div className="flex gap-3">
                  <div className="flex-grow">
                    <input
                      type="text"
                      title={!selectedEvent ? "Select an event first" : ""}
                      value={roundName}
                      onChange={(e) => setRoundName(e.target.value)}
                      placeholder="e.g., Semi-Finals Group A"
                      className={inputStyle}
                      disabled={!selectedEvent}
                    />
                  </div>
                  <button
                    onClick={createRound}
                    disabled={!selectedEvent}
                    className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 whitespace-nowrap text-sm"
                  >
                    <span>Add Round</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Spacer to push Button down if space exists, or just normal flow */}
              <div className="border-t border-zinc-800 my-2"></div>

              {/* Step 3: Generate */}
              <div className="shrink-0 pb-2">
                <label className={labelStyle}>
                  3. Finalize & Generate Access
                </label>
                <button
                  onClick={generateCodes}
                  disabled={!selectedEvent}
                  className="w-full group relative py-3.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 border border-zinc-700 text-zinc-200 font-semibold rounded-lg transition-all overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></div>
                  <span className="relative flex items-center justify-center gap-2 text-sm">
                    Generate Join Codes
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                </button>
                <p className="text-[10px] text-zinc-500 mt-2 text-center">
                  Generates unique tokens for the selected round.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: Output & Documentation (Sidebar) */}
        <div className="lg:col-span-4 flex flex-col gap-4 h-full min-h-0">
          {/* Results Panel - Grows to fill space */}
          <div
            className={`${cardBase} flex-1 min-h-0 ${
              codeData
                ? "border-indigo-500/30 shadow-lg shadow-indigo-900/20"
                : ""
            }`}
          >
            <div className="shrink-0">
              <h2 className={headingStyle}>
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  ></path>
                </svg>
                Access Control
              </h2>
              <p className={subTextStyle}>Generated codes will appear here.</p>
            </div>

            <div className="flex-1 overflow-y-auto pr-1">
              {codeData ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {/* Panelist Card */}
                  <div className="bg-zinc-950 border-l-4 border-blue-600 rounded-r-lg p-3 shadow-md relative group">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-blue-500 text-[10px] font-bold uppercase tracking-wider">
                        Panelist Access
                      </h3>
                      <span className="text-[9px] bg-blue-900/30 text-blue-300 px-1.5 py-0.5 rounded">
                        ADMIN
                      </span>
                    </div>
                    <div className="font-mono text-xl font-bold text-white tracking-widest select-all">
                      {codeData.panelistCode}
                    </div>
                  </div>

                  {/* Participant Card */}
                  <div className="bg-zinc-950 border-l-4 border-emerald-500 rounded-r-lg p-3 shadow-md relative group">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                        Participant Access
                      </h3>
                      <span className="text-[9px] bg-emerald-900/30 text-emerald-300 px-1.5 py-0.5 rounded">
                        USER
                      </span>
                    </div>
                    <div className="font-mono text-xl font-bold text-white tracking-widest select-all">
                      {codeData.participantCode}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-zinc-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-500 text-sm font-medium">
                    Awaiting Generation
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Help / Definition Panel - Fixed Height (shrink-0) */}
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 shrink-0">
            <h3 className="text-xs font-semibold text-zinc-200 mb-2">
              Role Definitions
            </h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-300">
                    Panelist
                  </p>
                  <p className="text-[10px] text-zinc-500 leading-tight">
                    Score, view metrics, manage rounds.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-300">
                    Participant
                  </p>
                  <p className="text-[10px] text-zinc-500 leading-tight">
                    Submit answers, view leaderboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
