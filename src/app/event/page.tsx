"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowUpRight,
  Search,
  Terminal,
  Cpu,
  Github,
  Linkedin,
  Layers,
  User,
} from "lucide-react";
import axios from "axios";

// --- Types ---
interface Event {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  organizerId: number;
}

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/organizers/events/getallEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const q = searchQuery.toLowerCase();
    return (
      event.name.toLowerCase().includes(q) || event.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="h-[calc(100vh-7rem)] bg-[#050505] text-neutral-200 font-mono selection:bg-teal-500/30 selection:text-teal-200 relative  mt-16 overflow-hidden">
      {/* --- Industrial Grid Background --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* --- Main Layout --- */}
      <div className="relative z-10 max-w-[1600px] mx-auto p-6 lg:p-12 flex flex-col h-screen">
        {/* --- Header / HUD Top Bar --- */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-teal-500 mb-2">
              <Terminal className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold">
                System_Ready
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">
              Event_Registry<span className="text-neutral-600">.Log</span>
            </h1>
          </div>

          {/* Search Input - HUD Style */}
          <div className="relative group w-full md:w-96">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded blur opacity-20 group-focus-within:opacity-75 transition duration-500"></div>
            <div className="relative flex items-center bg-neutral-950 border border-neutral-800 p-1">
              <div className="px-3 text-neutral-500">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="QUERY_DB::EVENT_ID..."
                className="w-full bg-transparent border-none text-sm text-teal-50 focus:ring-0 placeholder-neutral-600 h-10 uppercase"
              />
              <div className="px-2 text-[10px] text-neutral-600 border-l border-neutral-800">
                ESC
              </div>
            </div>
          </div>
        </header>

        {/* --- Content Area --- */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center text-neutral-500 gap-4">
              <Cpu className="w-12 h-12 animate-pulse text-teal-500/50" />
              <span className="text-xs uppercase tracking-[0.2em]">
                Initializing Data Stream...
              </span>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-neutral-800 text-neutral-600">
              <span>NO_RECORDS_FOUND</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredEvents.map((event, i) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={i}
                  router={router}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* --- "Powered By" Footer Badge --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="group flex items-center gap-4 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md px-4 py-3 rounded-none clip-path-slant hover:border-teal-500/30 transition-colors"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 40%)",
          }}
        >
          <div className="flex flex-col text-right mr-2">
            <span className="text-[9px] text-neutral-500 uppercase tracking-wider font-bold">
              Architected By
            </span>
            <span className="text-xs text-white font-bold tracking-tight group-hover:text-teal-400 transition-colors">
              ABHAY BANSAL
            </span>
          </div>

          <div className="h-8 w-px bg-neutral-800"></div>

          <div className="flex gap-3">
            <a
              href="https://abhaybansal.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform"
              title="Portfolio"
            >
              <User className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/targter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/abhaybansal001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-400 transition-colors hover:scale-110 transform"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- Sub-Component: Minimalist Card ---
function EventCard({
  event,
  index,
  router,
}: {
  event: Event;
  index: number;
  router: any;
}) {
  const handleSelect = () => {
    localStorage.setItem("selectedEventId", event.id);
    router.push(`/login?eventId=${event.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={handleSelect}
      className="group relative bg-neutral-900 border border-neutral-800 p-5 cursor-pointer hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Line Effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-teal-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-neutral-500 font-mono mb-1">
            ID: {event.id.slice(0, 8).toUpperCase()}
          </span>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-teal-400 transition-colors">
            {event.name}
          </h3>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2">
          <ArrowUpRight className="w-5 h-5 text-teal-500" />
        </div>
      </div>

      <div className="h-px w-full bg-neutral-800 mb-4 group-hover:bg-neutral-700 transition-colors"></div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-wider">
            <Calendar className="w-3 h-3" />
            {new Date(event.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-neutral-500">
            <Layers className="w-3 h-3" />
            ACTIVE_NODE
          </div>
        </div>

        <div className="w-2 h-2 bg-neutral-800 group-hover:bg-teal-500 transition-colors rounded-full shadow-[0_0_10px_rgba(20,184,166,0)] group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
      </div>
    </motion.div>
  );
}
