import React from 'react'
import Image from 'next/image'
const NavTopOne = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white text-black shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Image
        src="/images/logo-trans.png" // Path relative to the public folder
        alt="Company logo"
        width={80} // Must be a number
        height={80} // Must be a number
        className="h-auto w-auto"

      />
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-blue-400 cursor-pointer">Tutorial </li>
              <li className="hover:text-blue-400 cursor-pointer">Exercises</li>
              <li className="hover:text-blue-400 cursor-pointer">Certificates</li>
              <li className="hover:text-blue-400 cursor-pointer">Services</li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default NavTopOne;
