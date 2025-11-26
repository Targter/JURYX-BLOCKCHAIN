"use client";

import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
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

  // ... inside Login() function, after your state definitions ...

  // [ADD THIS BLOCK] Auto-fill dummy credentials based on selected Role
  useEffect(() => {
    const setDefaultCredentials = () => {
      if (role === "ORGANIZER") {
        setEmail("abhay-org@mail");
        setPassword("abhay");
        // Clear codes as they aren't needed for organizer
        setCode("");
        setEventId("");
      } else if (role === "PANELIST") {
        setEmail("abhay-panel@mail");
        setPassword("abhay");
        setCode("696049"); // Dummy Panelist Code
        // Only set default ID if URL didn't provide one
        setEventId((prev) => prev || "cmif6ebw80000oa3gy5rd8htg");
      } else {
        // USER
        setEmail("abhay-participant@mail");
        setPassword("abhay");
        setCode("B3526C"); // Dummy Participant Code
        setEventId((prev) => prev || "cmif6ebw80000oa3gy5rd8htg");
      }
    };

    setDefaultCredentials();
  }, [role]); // Re-run whenever the user clicks a different Role Tab

  // ... rest of your code ...
  // --- Effect: Auto-fill Event ID ---
  useEffect(() => {
    // const queryEventId = searchParams.get("eventId");
    const localEventId = localStorage.getItem("selectedEventId");

    if (localEventId) {
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
      console.log("lognin response:", response.data);

      // Update Global Store
      setUser({
        id: userData.id,
        email: userData.email,
        role: response.data.dbRole,
        eventId: eventId || response.data.eventId || "",
        isPublic: response.data.isPublic || false,
      });

      // Cleanup local storage
      if (role !== "ORGANIZER") {
        localStorage.removeItem("selectedEventId");
      }

      router.push(response.data.route);
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.message ||
            "Login failed. Please check your credentials."
        );
      } else {
        setError("Login failed. Please check your credentials.");
      }
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
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center bg-[#050505] px-4 font-sans selection:bg-indigo-500/30 relative overflow-hidden mt-16">
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Glass Card Container */}
        <div className="bg-zinc-900/60 border border-zinc-800 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 relative overflow-hidden pt-3 pb-3">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner mb-1 group">
              <Shield className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Authentication
            </h2>
            <p className="text-zinc-500 text-xs mt-2 uppercase tracking-widest">
              Access Control Gateway
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex gap-2 mb-3 bg-zinc-950/50 p-.7 rounded-2xl border border-zinc-800">
            <RoleTab value="ORGANIZER" label="Organizer" icon={Shield} />
            <RoleTab value="PANELIST" label="Panelist" icon={Gavel} />
            <RoleTab value="USER" label="Participant" icon={Users} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Disclaimer */}
            <AnimatePresence mode="wait">
              {(role === "PANELIST" || role === "USER") && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3 flex gap-3 items-start">
                    <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-indigo-200 leading-relaxed">
                      <b>Event ID</b> & <b>Access Code</b> are required for
                      secure entry.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-zinc-900 transition-all outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-zinc-900 transition-all outline-none"
              />
            </div>

            {/* Event Specific Fields */}
            <AnimatePresence mode="wait">
              {(role === "PANELIST" || role === "USER") && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 pt-1"
                >
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Hash className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Event ID (e.g., EVT-1234)"
                      value={eventId}
                      onChange={(e) => setEventId(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-zinc-900 transition-all outline-none font-mono"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Key className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Access Code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-zinc-900 transition-all outline-none font-mono tracking-widest"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
              >
                <p className="text-xs text-red-400 font-medium">{error}</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Connect</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            Authorized Personnel Only
          </p>
          <p className="text-[9px] text-zinc-400 uppercase tracking-widest">
            Contact : abhaybansal.in/
          </p>
        </div>
      </motion.div>
    </div>
  );
}
