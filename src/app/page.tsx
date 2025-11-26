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
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cpu,
  Globe,
  Box,
  User,
} from "lucide-react";

const HomePage: React.FC = () => {
  const router = useRouter();

  const features = [
    {
      title: "Immutable Consensus",
      description: "Scoring logic executed on-chain. Zero manipulation.",
      icon: Shield,
    },
    {
      title: "Smart Settlements",
      description: "Instant algorithmic payouts via smart contracts.",
      icon: Zap,
    },
    {
      title: "Reputation Protocol",
      description: "Decentralized identity verification for builders.",
      icon: Users,
    },
    {
      title: "IPFS Storage",
      description: "Censorship-resistant project hosting.",
      icon: FileCheck,
    },
    {
      title: "Trustless Escrow",
      description: "Prize pools locked in contract vaults.",
      icon: Lock,
    },
    {
      title: "Global Access",
      description: "Permissionless participation worldwide.",
      icon: Globe,
    },
  ];

  const techStack = [
    { name: "Ethereum", icon: "⟠", desc: "Settlement" },
    { name: "Solana", icon: "◎", desc: "Execution" },
    { name: "IPFS", icon: "▣", desc: "Storage" },
    { name: "Next.js", icon: "▲", desc: "Frontend" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-white/20 selection:text-white overflow-x-hidden flex flex-col">
      {/* --- GRID BACKGROUND (Very Subtle) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle Top Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                V1.0 &bull; Decentralized Governance
              </span>
            </div>
          </motion.div>

          {/* Main Headline - Controlled Size, Professional */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6"
          >
            BLOCKCHAIN POWERED <br />
            <span className="text-zinc-500">HACKATHON MANAGEMENT SYSTEM</span>
          </motion.h1>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px w-24 bg-zinc-800 mx-auto mb-6"
          />

          {/* Subtext - The "Fairness" part */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-zinc-500 max-w-lg mx-auto mb-10 font-light leading-relaxed"
          >
            Engineered for absolute fairness, verifiable transparency, and
            trustless execution. The standard for on-chain competition.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("/event")}
              className="h-11 px-8 cursor-pointer bg-zinc-100 text-black text-sm font-medium rounded hover:bg-white transition-colors flex items-center gap-2"
              title="Explore Events"
            >
              Deploy Event
            </button>

            <button
              onClick={() => router.push("/sys-docx")}
              className="h-11 px-8 border border-zinc-800 text-zinc-400 text-sm font-medium rounded hover:text-white hover:border-zinc-600 transition-all flex items-center gap-2 group cursor-pointer"
              title="About JURYX System Documentation"
            >
              System Docs
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- METRICS STRIP --- */}
      <section className="relative z-10 border-y border-zinc-900 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900">
            {[
              { label: "Locked Value", value: "$5M+" },
              { label: "Builders", value: "10,000+" },
              { label: "Events", value: "500+" },
              { label: "Uptime", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="py-6 text-center">
                <div className="text-xl font-bold text-zinc-200 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE GRID --- */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex items-end justify-between border-b border-zinc-900 pb-4">
            <h2 className="text-lg font-medium text-white">
              Core Architecture
            </h2>
            <span className="text-xs font-mono text-zinc-600">MODULES_V1</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-[#050505] p-8 hover:bg-zinc-900/30 transition-colors"
              >
                <div className="mb-4 text-zinc-600 group-hover:text-zinc-300 transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-zinc-200 mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Minimal) --- */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 p-8 border border-zinc-900 rounded-lg bg-zinc-900/20 items-center justify-between">
            <div className="flex items-center gap-4">
              <Box className="w-10 h-10 text-zinc-700" />
              <div>
                <h3 className="text-white font-medium">Industry Standard</h3>
                <p className="text-xs text-zinc-500">
                  Built on battle-tested infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="text-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <div className="text-lg mb-1 text-zinc-300">{tech.icon}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Developer Signature) --- */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-zinc-600">
            &copy; 2025 JURYX PROTOCOL.{" "}
            <span className="opacity-50">All Systems Normal.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                Architected By
              </span>
              <span className="text-xs font-bold text-zinc-300">
                Abhay Bansal
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://abhaybansal.in/"
                target="_blank"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <User className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/targter"
                target="_blank"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/abhaybansal001"
                target="_blank"
                className="text-zinc-600 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:theabhaybansal@gmail.com"
                className="text-zinc-600 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
