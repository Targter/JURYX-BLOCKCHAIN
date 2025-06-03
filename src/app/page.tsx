"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      title: 'Immutable Judging & Voting',
      description: 'Tamper-proof scoring and results secured by smart contracts on Ethereum/Solana.',
      icon: '🔒',
    },
    {
      title: 'Automated Rewards',
      description: 'Instant crypto or NFT payouts to winners with zero intermediaries.',
      icon: '💸',
    },
    {
      title: 'Decentralized Team Formation',
      description: 'Trustless collaboration with on-chain reputation systems for seamless teamwork.',
      icon: '🤝',
    },
    {
      title: 'Transparent Submissions',
      description: 'Timestamped project uploads on IPFS/Arweave to ensure dispute-free submissions.',
      icon: '📝',
    },
    {
      title: 'Sponsor Trust',
      description: 'Funds locked in smart contracts, released only when milestones are met.',
      icon: '🏦',
    },
  ];

  // Animation variants for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-r from-blue-100 to-purple-100"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Blockchain-Powered Hackathon Platform
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-700"
        >
          Revolutionize hackathons with transparency, security, and automation using decentralized technology.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/event')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Why Choose Our Platform?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Powered by Cutting-Edge Tech
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Ethereum/Solana', 'IPFS/Arweave', 'Next.js', 'Web3.js/Ethers.js'].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2, type: 'spring' }}
              viewport={{ once: true }}
              className="bg-blue-500 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-50 to-purple-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          Ready to Transform Hackathons?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
        >
          Join our decentralized platform and experience the future of hackathon management.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/login')}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
        >
          Sign Up Now
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;