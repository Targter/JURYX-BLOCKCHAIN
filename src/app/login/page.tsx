"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUserDetails } from '@/hooks/useStore';
import { motion } from 'framer-motion';

type Role = 'ORGANIZER' | 'PANELIST' | 'USER';
interface OrganizerLoginPayload {
  role: 'ORGANIZER';
  loginData: {
    email: string;
    password: string;
    role: Role;
  };
}

interface OtherLoginPayload {
  role: 'USER' | 'PANELIST';
  eventId: string;
  code: string;
  email: string;
  password: string;
}

type LoginPayload = OrganizerLoginPayload | OtherLoginPayload;
const Login: React.FC = () => {
  const router = useRouter();
  // const { setUser } = useUserDetails();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<Role>('USER');
  const [code, setCode] = useState<string>('');
  const [eventId, setEventId] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
       let payload: LoginPayload;

      if (role === 'ORGANIZER') {
         payload = {
          role,
          loginData: { email, password, role },
        };
        console.log("organizer:Payload",payload)
      } else {
        payload = {
          role,
          eventId,
          code,
          email,
          password,
        };
      }
      // console.log("payload:", payload);
      const response = await axios.post("/api/login", payload);
      const user = response.data.user;

      // setUser({
      //   id: user.id,
      //   email: user.email,
      //   role: user.role,
      //   eventId: eventId || '',
      //   isPublic: user.isPublic,
      // });
      // console.log("response.data", response.data);
      router.push(response.data.route);
      console.log('end');
    } catch (error) {
      // console.error(err);
      alert(error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {(role === 'PANELIST' || role === 'USER') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg text-gray-700"
          >
            <p className="text-sm font-medium">
              <span className="font-semibold">Disclaimer:</span> As a user and panelist, you must obtain the <span className="font-semibold">Event ID</span> and <span className="font-semibold">Login Code</span> from the event organizers to access the platform.
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {(role === 'ORGANIZER' || role === 'PANELIST' || role === 'USER') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="ORGANIZER">Organizer</option>
              <option value="PANELIST">Panelist</option>
              <option value="USER">Participant</option>
            </select>
          </div>

          {(role === 'PANELIST' || role === 'USER') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event ID</label>
                <input
                  type="text"
                  required
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Login Code</label>
                <input
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </>
          )}

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;