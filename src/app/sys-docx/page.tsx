"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Globe,
  Layout,
  Gavel,
  Users,
  Server,
  Database,
  Check,
  X as XIcon,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-teal-500/30 selection:text-teal-200 relative overflow-x-hidden">
      {/* --- Industrial Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 lg:p-12">
        {/* --- Navigation --- */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-teal-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_BASE
        </button>

        {/* --- Hero Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 border-b border-zinc-900 pb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-teal-500 uppercase tracking-widest">
              System Specification // V1.0
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
            JURYX <span className="text-zinc-700">PROTOCOL</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
            The operating system for on-chain competition. An end-to-end
            automated platform designed to eliminate bias, ensure transparency,
            and streamline global hackathon management.
          </p>
        </motion.div>

        {/* --- Section 1: Core Vision (Grid) --- */}
        <section className="mb-32">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-500" />
              Core Vision
            </h2>
            <span className="text-xs font-mono text-zinc-600">MODULE_01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider border-l-2 border-red-900/50 pl-4">
                The Problem: System Entropy
              </h3>
              <ul className="space-y-3">
                {[
                  "Manual Spreadsheet Chaos",
                  "Inconsistent & Biased Judging",
                  "Broken Submission Flows",
                  "Decentralized Communication",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400">
                    <XIcon className="w-4 h-4 text-red-800" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-mono text-teal-500 uppercase tracking-wider border-l-2 border-teal-500/50 pl-4">
                The Solution: Automated Order
              </h3>
              <ul className="space-y-3">
                {[
                  "Real-time Score Aggregation",
                  "Cryptographic Transparency",
                  "Centralized Logic & Access",
                  "Automated Leaderboards",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-200">
                    <Check className="w-4 h-4 text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- Section 2: System Roles (Cards) --- */}
        <section className="mb-32">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-6 h-6 text-teal-500" />
              System Roles
            </h2>
            <span className="text-xs font-mono text-zinc-600">MODULE_02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {/* Card 1 */}
            <div className="bg-[#050505] p-8 group hover:bg-zinc-900/50 transition-colors">
              <Layout className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-teal-400 transition-colors" />
              <h3 className="text-lg font-bold text-white mb-2">
                Organizer Node
              </h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
                Full control dashboard. Manage rounds, define criteria, generate
                access codes, and export finalized data.
              </p>
              <ul className="text-xs text-zinc-600 space-y-1 font-mono">
                <li>+ Event Creation</li>
                <li>+ Criteria Logic</li>
                <li>+ Access Control</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#050505] p-8 group hover:bg-zinc-900/50 transition-colors">
              <Gavel className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-teal-400 transition-colors" />
              <h3 className="text-lg font-bold text-white mb-2">
                Panelist Node
              </h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
                Distraction-free evaluation interface. Secure login, assigned
                team views, and real-time score validation.
              </p>
              <ul className="text-xs text-zinc-600 space-y-1 font-mono">
                <li>+ Secure Auth</li>
                <li>+ Code Review</li>
                <li>+ Live Scoring</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#050505] p-8 group hover:bg-zinc-900/50 transition-colors">
              <Users className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-teal-400 transition-colors" />
              <h3 className="text-lg font-bold text-white mb-2">
                Participant Node
              </h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
                Seamless submission flow. Team formation, project upload
                (S3/IPFS), and live status tracking.
              </p>
              <ul className="text-xs text-zinc-600 space-y-1 font-mono">
                <li>+ Team Formation</li>
                <li>+ Project Upload</li>
                <li>+ Status Sync</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Section 3: Technical Architecture (List) --- */}
        <section className="mb-32">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Server className="w-6 h-6 text-teal-500" />
              Technical Stack
            </h2>
            <span className="text-xs font-mono text-zinc-600">MODULE_03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: "Frontend Core",
                items: [
                  "Next.js (App Router)",
                  "TypeScript",
                  "TailwindCSS",
                  "Zustand State",
                ],
              },
              {
                cat: "Backend Logic",
                items: [
                  "Node.js / Express",
                  "Prisma ORM",
                  "PostgreSQL",
                  "JWT Auth",
                ],
              },
              {
                cat: "Infrastructure",
                items: [
                  "AWS S3 Storage",
                  "Vercel Edge",
                  "Render / Railway",
                  "Docker",
                ],
              },
              {
                cat: "Security Layer",
                items: [
                  "Bcrypt Hashing",
                  "Role-Based Access",
                  "Input Sanitization",
                  "API Rate Limits",
                ],
              },
            ].map((stack, i) => (
              <div
                key={i}
                className="border border-zinc-900 bg-zinc-900/20 p-6 rounded-lg"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                  {stack.cat}
                </h4>
                <ul className="space-y-2">
                  {stack.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-xs text-zinc-400 font-mono flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section 4: Comparative Analysis (HUD Table) --- */}
        <section className="mb-32">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Database className="w-6 h-6 text-teal-500" />
              Performance Analysis
            </h2>
            <span className="text-xs font-mono text-zinc-600">MODULE_04</span>
          </div>

          <div className="overflow-x-auto border border-zinc-800 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 font-mono">
                  <th className="p-4 border-b border-zinc-800 border-r">
                    Metric
                  </th>
                  <th className="p-4 border-b border-zinc-800 border-r w-1/3">
                    Manual / Legacy
                  </th>
                  <th className="p-4 border-b border-zinc-800 w-1/3 text-teal-500">
                    JuryX Protocol
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-zinc-400">
                {[
                  {
                    metric: "Setup Latency",
                    old: "High (Days)",
                    new: "Low (Minutes)",
                  },
                  {
                    metric: "Data Integrity",
                    old: "Compromised (Manual)",
                    new: "Absolute (Automated)",
                  },
                  {
                    metric: "Judge Access",
                    old: "Insecure Links",
                    new: "Role-Based Auth",
                  },
                  {
                    metric: "Result Computation",
                    old: "Manual Aggregation",
                    new: "Real-Time Processing",
                  },
                  {
                    metric: "Scalability",
                    old: "Linear Decline",
                    new: "Infinite Scale",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-zinc-800 hover:bg-zinc-900/20 transition-colors"
                  >
                    <td className="p-4 border-r border-zinc-800 font-medium text-zinc-300">
                      {row.metric}
                    </td>
                    <td className="p-4 border-r border-zinc-800 text-red-900/70 font-mono">
                      {row.old}
                    </td>
                    <td className="p-4 text-teal-500/80 font-mono">
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FOOTER / DEVELOPER --- */}
        <footer className="border-t border-zinc-900 pt-12 mt-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight mb-2">
              <Globe className="w-5 h-5 text-teal-500" />
              JURYX
            </div>
            <p className="text-xs text-zinc-600 max-w-xs">
              Engineered for the future of decentralized competition.
              <br />© 2025. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Architected By
              </p>
              <p className="text-sm font-bold text-white">Abhay Bansal</p>
            </div>
            <div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
            <div className="flex gap-4">
              <a
                href="https://github.com/targter"
                target="_blank"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abhaybansal001"
                target="_blank"
                className="text-zinc-600 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abhaybansal@example.com"
                className="text-zinc-600 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
