"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useUserDetails } from "@/hooks/useStore";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  Gavel,
  Lock,
  ArrowRight,
  Hash,
  Key,
  Mail,
  Loader2,
  AlertCircle,
} from "lucide-react";

// --- Types ---
type Role = "ORGANIZER" | "PANELIST" | "USER";

interface OrganizerLoginPayload {
  role: "ORGANIZER";
  loginData: {
    email: string;
    password: string;
    role: Role;
  };
}

interface OtherLoginPayload {
  role: "USER" | "PANELIST";
  eventId: string;
  code: string;
  email: string;
  password: string;
}

type LoginPayload = OrganizerLoginPayload | OtherLoginPayload;

export default function Login() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const searchParams = useParams();
  const { setUser } = useUserDetails();

  // --- State ---
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<Role>("USER");
  const [code, setCode] = useState<string>("");
  const [eventId, setEventId] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Effect: Auto-fill Event ID ---
  useEffect(() => {
    const queryEventId = searchParams.get("eventId");
    const localEventId = localStorage.getItem("selectedEventId");

    if (queryEventId) {
      setEventId(queryEventId);
      if (role === "ORGANIZER") setRole("USER");
    } else if (localEventId) {
      setEventId(localEventId);
    }
  }, [searchParams, role]);

  // --- Handlers ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let payload: LoginPayload;

      if (role === "ORGANIZER") {
        payload = {
          role,
          loginData: { email, password, role },
        };
      } else {
        payload = {
          role,
          eventId,
          code,
          email,
          password,
        };
      }

      const response = await axios.post("/api/login", payload);
      const userData = response.data.user;

      // Update Global Store
      setUser({
        id: userData.id,
        email: userData.email,
        role: userData.role,
        eventId: eventId || userData.eventId || "",
        isPublic: userData.isPublic || false,
      });

      // Cleanup local storage
      if (role !== "ORGANIZER") {
        localStorage.removeItem("selectedEventId");
      }

      router.push(response.data.route);
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Helper for Role Tabs
  const RoleTab = ({
    value,
    label,
    icon: Icon,
  }: {
    value: Role;
    label: string;
    icon: any;
  }) => (
    <button
      type="button"
      onClick={() => {
        setRole(value);
        setError(null);
      }}
      className={`flex-1 flex flex-col items-center justify-center py-2.5 rounded-lg text-[11px] uppercase tracking-wide font-semibold transition-all duration-200 ${
        role === value
          ? "bg-zinc-800 text-indigo-400 shadow-md ring-1 ring-indigo-500/40"
          : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
      }`}
    >
      <Icon
        className={`w-4 h-4 mb-1.5 ${role === value ? "text-indigo-400" : ""}`}
      />
      {label}
    </button>
  );

  return (
    // EXACT CONTAINER SIZE REQUESTED
    <div className="h-[calc(100vh-70px)] flex items-center justify-center bg-zinc-950 px-4 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Background Ambience (Contained within the height) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Welcome Back
            </h2>
            <p className="text-zinc-400 text-xs mt-1">
              Sign in to access the Juryx platform
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex gap-2 mb-6 bg-zinc-950/50 p-1.5 rounded-xl border border-zinc-800">
            <RoleTab value="ORGANIZER" label="Organizer" icon={Shield} />
            <RoleTab value="PANELIST" label="Panelist" icon={Gavel} />
            <RoleTab value="USER" label="Participant" icon={Users} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Disclaimer */}
            <AnimatePresence mode="wait">
              {(role === "PANELIST" || role === "USER") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-indigo-950/20 border border-indigo-500/20 rounded-lg p-2.5 flex gap-2 items-start"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-indigo-300 leading-snug">
                    Requires <b>Event ID</b> & <b>Access Code</b>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email & Password */}
            <div className="space-y-3">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600"
                />
              </div>
            </div>

            {/* Event Specific Fields */}
            <AnimatePresence mode="wait">
              {(role === "PANELIST" || role === "USER") && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-1"
                >
                  <div className="relative group">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="Event ID (e.g., EVT-1234)"
                      value={eventId}
                      onChange={(e) => setEventId(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600 font-mono"
                    />
                  </div>

                  <div className="relative group">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="Access Code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-zinc-600 font-mono tracking-widest"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-red-400 text-center bg-red-950/20 border border-red-500/20 p-2 rounded"
              >
                {error}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
