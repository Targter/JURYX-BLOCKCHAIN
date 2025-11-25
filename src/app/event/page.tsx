"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Search,
  Hash,
  Sparkles,
  Loader2,
  FileText,
} from "lucide-react";
import axios from "axios";

// --- Types based on your Prisma Model ---
interface Event {
  id: string;
  name: string;
  description: string | null;
  createdAt: string; // Dates typically come as strings from JSON APIs
  organizerId: number;
}

export default function EventsPage() {
  const router = useRouter();

  // State
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch Data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/organizers/events/getallEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle Event Selection
  const handleSelectEvent = (eventId: string) => {
    localStorage.setItem("selectedEventId", eventId);
    router.push(`/login?eventId=${eventId}`);
  };

  // Filter Logic (Search Only)
  const filteredEvents = events.filter((event) => {
    const searchLower = searchQuery.toLowerCase();
    const nameMatch = event.name.toLowerCase().includes(searchLower);
    const idMatch = event.id.toLowerCase().includes(searchLower);
    return nameMatch || idMatch;
  });

  // Date Formatter
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            <span>Live Hackathons</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Explore Active{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Events
            </span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Find your next challenge. Select an event to seamlessly login and
            start building or judging.
          </p>
        </motion.div>

        {/* Controls: Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by event name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/40 border border-zinc-800 text-zinc-200 text-sm rounded-2xl pl-10 pr-4 py-3 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Events Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
            <p className="text-zinc-500 text-sm">Loading ecosystem events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-32 border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/20">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
              <Calendar className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No Events Found
            </h3>
            <p className="text-zinc-500 text-sm">
              Try adjusting your search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    {/* Date Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] uppercase font-bold tracking-wider">
                      <Calendar className="w-3 h-3" />
                      {formatDate(event.createdAt)}
                    </div>

                    {/* ID Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-950/50 border border-zinc-800/50 text-zinc-500 font-mono text-[10px]">
                      <Hash className="w-3 h-3" />
                      {event.id.slice(0, 8)}...
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {event.name}
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                    <FileText className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                    <p className="line-clamp-3">
                      {event.description || "No description provided."}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0 mt-auto">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-4"></div>
                  <button
                    onClick={() => handleSelectEvent(event.id)}
                    className="w-full py-3 bg-white text-zinc-950 font-bold text-sm rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group/btn shadow-lg shadow-white/5"
                  >
                    Select Event
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
