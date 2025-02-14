import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavTopOne from "../Components/NavTopOne";
import NavTopTwo from "../Components/NavTopTwo";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="min-h-screen flex flex-col bg-gray-100">
          
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <NavTopOne />
            <NavTopTwo />
          </div>

          <div className="flex flex-1 pt-[80px]"> {/* Adjust padding to avoid overlap with navbar */}
            
            {/* Sticky Sidebar */}
            <div className="sticky top-[105px] h-[calc(100vh-105px)] w-64 bg-white shadow-md overflow-y-auto">
              <Sidebar />
            </div>

            {/* Scrollable Main Content */}
            <main className="flex-1 p-6 overflow-auto">
              {children}
              <Footer className="sticky bottom-0 w-full bg-white shadow-md" />
            </main>
          </div>
          
        </div>
      </body>
    </html>
  );
}
