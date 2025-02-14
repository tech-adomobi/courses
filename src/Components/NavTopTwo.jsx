"use client";
import { usePathname } from "next/navigation";
import React from 'react'

const NavTopTwo = () => {
  const pathname = usePathname(); // Get current path
    return (
        <div className="sticky top-0 z-40  bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
          <ul className="flex space-x-6">
          <li
        className={`cursor-pointer ${
          pathname === "/home" ? "text-orange-400" : "text-orange-600 hover:text-orange-400"
        }`}
      >
        HTML
      </li>
          <li className="text-white hover:text-orange-400 cursor-pointer">CSS</li>
          <li className="text-white hover:text-orange-400 cursor-pointer">JAVASCRIPT</li>
          <li className="text-white hover:text-orange-400 cursor-pointer">PYTHON</li>

          </ul>
        </div>
      </div>
      
    )
}

export default NavTopTwo;

