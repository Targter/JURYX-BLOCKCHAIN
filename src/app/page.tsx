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
  Terminal,
} from "lucide-react";

const HomePage: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      title: "Immutable Judging & Voting",
      description:
        "Tamper-proof scoring results secured by smart contracts on Ethereum & Solana.",
      icon: Shield,
      accent: "text-blue-400",
      bgAccent: "bg-blue-500/10",
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
      accent: "text-purple-400",
      bgAccent: "bg-purple-500/10",
      benefits: ["Instant Payouts", "No Middlemen", "Multi-Token Support"],
    },
    {
      title: "Decentralized Teams",
      description:
        "Trustless collaboration with on-chain reputation systems for seamless teamwork.",
      icon: Users,
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500/10",
      benefits: ["On-Chain Reputation", "Smart Matching", "Team Analytics"],
    },
    {
      title: "Transparent Submissions",
      description:
        "Timestamped project uploads on IPFS/Arweave ensuring dispute-free submissions.",
      icon: FileCheck,
      accent: "text-orange-400",
      bgAccent: "bg-orange-500/10",
      benefits: [
        "Immutable Records",
        "Timestamp Proof",
        "Decentralized Storage",
      ],
    },
    {
      title: "Sponsor Escrow",
      description:
        "Funds locked in smart contracts, released only when milestones are achieved.",
      icon: Lock,
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
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
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-900/20 blur-[100px] rounded-full" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full pl-2 pr-4 py-1 mb-8 backdrop-blur-md"
          >
            <div className="bg-zinc-800 p-1 rounded-full">
              <Sparkles className="w-3 h-3 text-zinc-300" />
            </div>
            <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">
              Powered by Blockchain
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            The Future of <br className="hidden md:block" />
            <span className="text-zinc-500">Hackathon Management</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Build trust, automate rewards, and ensure transparency. <br className="hidden sm:block" />
            No intermediaries. No disputes. Just pure innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("/event")}
              className="group relative h-12 px-8 rounded-lg bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => router.push("/about")}
              className="h-12 px-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 transition-all duration-200"
            >
              View Demo
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-8 border-t border-zinc-900 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* --- FEATURES SECTION --- */}
      <section className="relative z-10 py-24 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Why Choose Our Platform?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
              Enterprise-grade infrastructure for successful, transparent, and secure hackathons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${feature.bgAccent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <feature.icon className={`w-5 h-5 ${feature.accent}`} />
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-800/50">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                      <Check className="w-3 h-3 text-zinc-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="relative z-10 py-24 px-6 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            
            <div className="md:w-1/3">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                Technology
              </span>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Built with Industry Leaders
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Leveraging the most powerful and trusted blockchain technologies to ensure reliability and speed.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors cursor-default"
                >
                  <span className="text-xl filter grayscale group-hover:grayscale-0">{tech.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200">
                      {tech.name}
                    </h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-base text-zinc-400 mb-10 max-w-2xl mx-auto">
                Join thousands of organizers building the future of competitive events.
              </p>
              
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors shadow-xl shadow-zinc-950/50"
              >
                Create Your First Hackathon
              </button>

              <p className="mt-6 text-xs text-zinc-600">
                No credit card required • Free to start • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
