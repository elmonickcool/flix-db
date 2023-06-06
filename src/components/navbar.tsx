import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-sky-600">
      <div className="container mx-auto px-5 py-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
              <a href="/" className="text-black text-lg font-bold">
              <div className="bg-yellow-500 py-3 px-2 rounded-sm">
                FlixDB
                </div>
              </a>
          </div>
          <div className="hidden md:flex md:space-x-4 ">
            <a
              href="/"
              className="text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-md text-black text-base font-medium"
            >
              Home
            </a>
            <a
              href="/Movies"
              className="text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Movies
            </a>
            <a
              href="/Shows"
              className="text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
              TV Shows
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
