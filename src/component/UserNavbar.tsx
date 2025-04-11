import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auhref flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link
            href="/preview"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Preview
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            href="/upload"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
