"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebarlink = ({ item }) => {
  const pathname = usePathname(); // Get current route

  return (
    <Link 
      href={item.path} 
      className={`block py-1 px-3 rounded transition duration-200 
        ${pathname === item.path ? "bg-orange-700 text-white font-semibold" : "hover:bg-gray-300 text-gray-800"}`}
    >
      {item.title}
    </Link>
  );
}

export default Sidebarlink;
