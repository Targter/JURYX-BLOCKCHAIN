"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

// Mock event data (replace with API call in a real app)
type Event = {
  id: string;
  name: string;
  date: string;
  description: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
};

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'CryptoHack 2025',
    date: 'June 15, 2025',
    description: 'A global hackathon for blockchain innovators to build decentralized apps.',
    status: 'Upcoming',
  },
  {
    id: '2',
    name: 'Web3 Innovate',
    date: 'July 10, 2025',
    description: 'Collaborate on cutting-edge Web3 solutions with top developers.',
    status: 'Upcoming',
  },
  {
    id: '3',
    name: 'NFT Creation Sprint',
    date: 'May 20, 2025',
    description: 'Design and deploy unique NFTs using Solana and IPFS.',
    status: 'Completed',
  },
];

const Events: React.FC = () => {
  const router = useRouter();

  // Animation variants for event cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-16 px-4">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Explore Hackathon Events
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Join exciting blockchain-powered hackathons and collaborate with innovators worldwide.
        </p>
      </motion.section>

      {/* Events List */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    event.status === 'Upcoming'
                      ? 'bg-blue-100 text-blue-600'
                      : event.status === 'Ongoing'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-sm text-gray-500 mb-6">Date: {event.date}</p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/events/${event.id}`)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
              >
                Join Event
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Login Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Participate?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Log in as an Organizer, Panelist, or Participant to create, judge, or join hackathons. Get your Event ID and Login Code from the organizers to dive in!
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/login')}
          className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:bg-purple-600"
        >
          Log In Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Events;