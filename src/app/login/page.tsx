"use client"

import React, { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
type Role = 'ORGANIZER' | 'PANELIST' | 'USER';

const Login: React.FC = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<Role>('USER');

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const loginData = { email, password, role };
    // console.log("loginFun called")
    console.log('Login Data:', loginData);
    const response = await axios.post("/api/login",{loginData})
    console.log("a",response.data)
    console.log(response.data.route)
    router.push(response.data.route)


    // Send to backend or auth service here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ORGANIZER">ORGANIZER</option>
              <option value="PANELIST">PANELIST</option>
              <option value="USER">USER</option>
            </select>   
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
