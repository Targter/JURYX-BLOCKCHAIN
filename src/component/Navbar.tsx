"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
  { label: "Event", href: "/event" },
  { label: "Deployment", href: "/deployment" },
  { label: "Organizer", href: "/organizer" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition duration-300"
          >
            JuryX
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative group text-gray-700 font-medium hover:text-blue-600 transition duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
