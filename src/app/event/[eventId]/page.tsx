"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";

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

const EventDetail: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const eventid = params?.eventid;

  const event = mockEvents.find((e) => e.id === eventid);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 text-gray-900 p-8">
        <h1 className="text-3xl font-bold mb-4">Event not found</h1>
        <button
          onClick={() => router.push("/event")}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {event.name}
      </h1>
      <p className="text-lg mb-6">{event.description}</p>
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Prize Pool:</strong> {event.prizePool}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`font-semibold px-3 py-1 rounded-full ${
              event.status === "Upcoming"
                ? "bg-blue-100 text-blue-700"
                : event.status === "Ongoing"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {event.status}
          </span>
        </p>
        <p>
          <strong>Sponsors:</strong>{" "}
          {event.sponsors.map((sponsor, idx) => (
            <span key={idx} className="inline-block mr-1 font-medium text-gray-800">
              {sponsor}
              {idx < event.sponsors.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
      </div>
      <button
        onClick={() => router.push("/event")}
        className="mt-10 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        Back to Events
      </button>
    </div>
  );
};

export default EventDetail;

