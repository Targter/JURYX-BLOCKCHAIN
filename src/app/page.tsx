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
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Automated Rewards',
      description: 'Instant crypto or NFT payouts to winners with zero intermediaries.',
      icon: '💸',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Decentralized Team Formation',
      description: 'Trustless collaboration with on-chain reputation systems for seamless teamwork.',
      icon: '🤝',
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Transparent Submissions',
      description: 'Timestamped project uploads on IPFS/Arweave to ensure dispute-free submissions.',
      icon: '📝',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Sponsor Trust',
      description: 'Funds locked in smart contracts, released only when milestones are met.',
      icon: '🏦',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  // Animation variants for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        type: 'spring',
        stiffness: 100,
        damping: 12
      },
    }),
  };

  const heroImageVariants = {
    hidden: { opacity: 0, x: -100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-900 overflow-hidden">
      {/* Enhanced Hero Section with Image Left, Text Right */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-4 py-8"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            variants={heroImageVariants}
            initial="hidden"
            animate="visible"
            className="relative group"
          >
            <div className="relative">
              {/* Floating Background Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 1, 1.1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
              />

              {/* Main Visual Container */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Blockchain Visual Representation */}
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-3xl">⛓️</div>
                    <div>
                      <div className="font-bold">Smart Contracts</div>
                      <div className="text-sm opacity-90">Ethereum/Solana</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-3xl">🏆</div>
                    <div>
                      <div className="font-bold">Automated Rewards</div>
                      <div className="text-sm opacity-90">Instant Payouts</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white shadow-lg"
                  >
                    <div className="text-3xl">🔐</div>
                    <div>
                      <div className="font-bold">Immutable Records</div>
                      <div className="text-sm opacity-90">IPFS/Arweave</div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating particles */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-6"
            >
             <motion.h1
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-5xl lg:text-7xl font-extrabold leading-tight text-center"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500">
    Smart. Seamless.
  </span>
  <br />
  <span className="text-gray-900">Judged Right</span>
  <br />
  <span className="mt-2 block text-4xl lg:text-5xl font-extrabold text-blue-700">
    juryX
  </span>
</motion.h1>


              {/* 🔥 Tagline */}
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-4 text-xl lg:text-2xl font-medium text-gray-600 text-center"
              >
                Judge. Join. Jam.
              </motion.p>


              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Revolutionize hackathons with <span className="font-semibold text-blue-600">transparency</span>,
                <span className="font-semibold text-purple-600"> security</span>, and
                <span className="font-semibold text-green-600"> automation</span> using cutting-edge decentralized technology.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 12px 32px rgba(59, 130, 246, 0.4)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/event')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl text-lg"
              >
                Get Started →
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/50 text-lg"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Transparent</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-3xl font-bold text-purple-600">0</div>
                <div className="text-sm text-gray-600">Fees</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Automated</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white/50 to-gray-50/50 backdrop-blur-sm">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
        >
          Why Choose Our Platform?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient background on hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl transition-all duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6 transition-transform duration-300"
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-all duration-300"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-all duration-300"
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Hover effect particles */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.6 }}
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-300"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.4 }}
                className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-gray-800"
        >
          Powered by Cutting-Edge Tech
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {['Ethereum/Solana', 'IPFS/Arweave', 'Next.js', 'Web3.js/Ethers.js'].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                y: -5
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Ready to Transform Hackathons?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl mb-12 text-gray-600 leading-relaxed"
          >
            Join our decentralized platform and experience the future of hackathon management.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 16px 32px rgba(168, 85, 247, 0.4)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => router.push('/login')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl text-xl"
          >
            Sign Up Now →
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;