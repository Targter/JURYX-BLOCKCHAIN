"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  prizePool: string;
  sponsors: string[];
  status: "Upcoming" | "Ongoing" | "Completed";
};

const mockEvents: Event[] = [
  {
    id: "1",
    name: "CryptoHack 2025",
    date: "June 15, 2025",
    location: "Bengaluru, India",
    description: "A global hackathon for blockchain innovators to build decentralized apps.",
    prizePool: "$10,000",
    sponsors: ["Polygon", "Chainlink", "Coinbase"],
    status: "Upcoming",
  },
  {
    id: "2",
    name: "Web3 Innovate",
    date: "July 10, 2025",
    location: "San Francisco, USA",
    description: "Collaborate on cutting-edge Web3 solutions with top developers.",
    prizePool: "$15,000",
    sponsors: ["Ethereum Foundation", "Alchemy"],
    status: "Upcoming",
  },
  {
    id: "3",
    name: "NFT Creation Sprint",
    date: "May 20, 2025",
    location: "Virtual",
    description: "Design and deploy unique NFTs using Solana and IPFS.",
    prizePool: "$5,000",
    sponsors: ["Solana", "IPFS"],
    status: "Completed",
  },
  {
    id: "4",
    name: "DAO Builders Meetup",
    date: "August 2, 2025",
    location: "Berlin, Germany",
    description: "A 48-hour sprint to design decentralized autonomous organizations.",
    prizePool: "$8,000",
    sponsors: ["Aragon", "Safe (Gnosis)"],
    status: "Upcoming",
  },
  {
    id: "5",
    name: "Layer 2 Scaling Jam",
    date: "September 5, 2025",
    location: "Online",
    description: "Hack on Layer 2 scaling solutions using ZK-rollups and Optimistic rollups.",
    prizePool: "$12,000",
    sponsors: ["StarkWare", "Optimism"],
    status: "Ongoing",
  },
  {
    id: "6",
    name: "DeFi Clash 2025",
    date: "October 12, 2025",
    location: "Singapore",
    description: "A battle of minds to create the most impactful DeFi protocols.",
    prizePool: "$20,000",
    sponsors: ["Aave", "Uniswap", "Balancer"],
    status: "Upcoming",
  },
];

const Events: React.FC = () => {
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16 px-4">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Explore Hackathons
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover, participate, and win exciting rewards in Web3 hackathons globally.
        </p>
      </motion.section>

      {/* Event Grid */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border-2 border-blue-200 hover:border-purple-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      event.status === "Upcoming"
                        ? "bg-blue-100 text-blue-600"
                        : event.status === "Ongoing"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-sm text-gray-500 mb-1">📍 Location: {event.location}</p>
                <p className="text-sm text-gray-500 mb-1">📅 Date: {event.date}</p>
                <p className="text-sm text-gray-500 mb-1">🏆 Prize Pool: {event.prizePool}</p>
                <p className="text-sm text-gray-500 mb-4">
                  🤝 Sponsors:{" "}
                  {event.sponsors.map((s, i) => (
                    <span key={i} className="inline-block mr-1 text-gray-700 font-medium">
                      {s}
                      {i < event.sponsors.length - 1 ? "," : ""}
                    </span>
                  ))}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/event/${event.id}`)}
                className="w-full mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
              >
                Join Event <span className="ml-2">🚀</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Login CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Participate?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Log in as an Organizer, Panelist, or Participant to create, judge, or join hackathons.
          Get your Event ID and Login Code from the organizers and dive into the blockchain action!
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/login")}
          className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:bg-purple-600"
        >
          Log In Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Events;
