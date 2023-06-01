import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-lg font-semibold">FlixDB</a>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/Movies" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Movies</a>
            <a href="/Shows" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">TV Shows</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
