"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Filter,
  Search,
  Clock,
} from "lucide-react";

// Mock event data (replace with API call in a real app)
type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  participants: number;
  prizePool: string;
  location: string;
};

const mockEvents: Event[] = [];

const Events: React.FC = () => {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Upcoming" | "Ongoing" | "Completed"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesFilter =
      selectedFilter === "All" || event.status === selectedFilter;
    const matchesSearch =
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Ongoing":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Completed":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Background gradient orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center pt-32 pb-16 px-4"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Discover Events
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-white">Explore Hackathon</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Join exciting blockchain-powered hackathons and collaborate with
            innovators worldwide
          </p>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            {/* Search Bar */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              {["All", "Upcoming", "Ongoing", "Completed"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter as any)}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-white text-black"
                      : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1] border border-white/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Events Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-32">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-32"
            >
              <div className="max-w-2xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-16">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  No Events Yet
                </h3>
                <p className="text-xl text-gray-400 mb-8 font-light">
                  There are currently no hackathon events available. Check back
                  soon or create your own event!
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push("/create-event")}
                  className="group relative bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
                >
                  <span className="relative z-10">Create Your Event</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Event Title */}
                  <h2 className="text-2xl font-bold text-white mb-3 relative z-10">
                    {event.name}
                  </h2>

                  {/* Event Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed font-light relative z-10">
                    {event.description}
                  </p>

                  {/* Event Meta Info */}
                  <div className="space-y-3 mb-6 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Users className="w-4 h-4 text-green-400" />
                        <span>
                          {event.participants.toLocaleString()} participants
                        </span>
                      </div>
                      <div className="text-blue-400 font-semibold">
                        {event.prizePool}
                      </div>
                    </div>
                  </div>

                  {/* Join Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/events/${event.id}`)}
                    className="relative z-10 w-full bg-white text-black font-semibold py-3 rounded-xl transition-all duration-300 overflow-hidden group/btn flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Join Event</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 pb-32"
        >
          <div className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Ready to Participate?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Log in as an Organizer, Panelist, or Participant to create,
                judge, or join hackathons. Get your Event ID and Login Code from
                organizers to dive in!
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/login")}
                className="group relative bg-white text-black font-semibold py-4 px-10 rounded-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
              >
                <span className="relative z-10">Log In Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <div className="mt-6 text-sm text-gray-500">
                Don't have credentials? Contact your event organizer
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Events;
