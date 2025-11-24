"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Shield,
  Zap,
  Users,
  FileCheck,
  Lock,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const HomePage: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      title: "Immutable Judging & Voting",
      description:
        "Tamper-proof scoring and results secured by smart contracts on Ethereum/Solana blockchain.",
      icon: Shield,
      gradient: "from-blue-600 to-blue-400",
      benefits: [
        "Transparent Results",
        "Zero Manipulation",
        "Instant Verification",
      ],
    },
    {
      title: "Automated Rewards",
      description:
        "Instant cryptocurrency or NFT payouts to winners with zero intermediaries.",
      icon: Zap,
      gradient: "from-purple-600 to-purple-400",
      benefits: ["Instant Payouts", "No Middlemen", "Multi-Token Support"],
    },
    {
      title: "Decentralized Team Formation",
      description:
        "Trustless collaboration with on-chain reputation systems for seamless teamwork.",
      icon: Users,
      gradient: "from-emerald-600 to-emerald-400",
      benefits: ["On-Chain Reputation", "Smart Matching", "Team Analytics"],
    },
    {
      title: "Transparent Submissions",
      description:
        "Timestamped project uploads on IPFS/Arweave ensuring dispute-free submissions.",
      icon: FileCheck,
      gradient: "from-orange-600 to-orange-400",
      benefits: [
        "Immutable Records",
        "Timestamp Proof",
        "Decentralized Storage",
      ],
    },
    {
      title: "Sponsor Trust",
      description:
        "Funds locked in smart contracts, released only when milestones are achieved.",
      icon: Lock,
      gradient: "from-cyan-600 to-cyan-400",
      benefits: ["Escrow Protection", "Milestone-Based", "Automated Release"],
    },
  ];

  const techStack = [
    { name: "Ethereum", icon: "⟠", description: "Smart Contracts" },
    { name: "Solana", icon: "◎", description: "High Performance" },
    { name: "IPFS", icon: "▣", description: "Decentralized Storage" },
    { name: "Arweave", icon: "⬡", description: "Permanent Storage" },
    { name: "Next.js", icon: "▲", description: "Frontend Framework" },
    { name: "Web3.js", icon: "◆", description: "Blockchain Integration" },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "500+", label: "Hackathons Hosted" },
    { value: "$5M+", label: "Prize Pool Distributed" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
      >
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">
              Powered by Blockchain Technology
            </span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block text-white">The Future of</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Hackathon Management
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed font-light"
          >
            Build trust, automate rewards, and ensure transparency with our
            blockchain-powered platform.
            <span className="block mt-2 text-gray-500">
              No intermediaries. No disputes. Just pure innovation.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/event")}
              className="group relative bg-white text-black font-semibold py-4 px-10 rounded-xl transition-all duration-300 overflow-hidden min-w-[200px]"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/about")}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm min-w-[200px]"
            >
              View Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Features
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Everything you need to run a successful, transparent, and secure
              hackathon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 relative`}
                >
                  <feature.icon className="w-7 h-7 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom border accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                Technology Stack
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Built with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Leveraging the most powerful and trusted blockchain technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 rounded-xl p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-500">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Join thousands of developers, sponsors, and organizers building
                the future of hackathons
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/login")}
                className="group relative bg-white text-black font-semibold py-5 px-12 rounded-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-3"
              >
                <span className="relative z-10">
                  Create Your First Hackathon
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <div className="mt-8 text-sm text-gray-500">
                No credit card required • Free to start • Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default HomePage;
