import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 shadow-md border-b border-yellow-300 bg-[#1a1a1a] flex items-center justify-between w-full">
      {/* Search Bar */}
      <div className="flex gap-2 items-center bg-gray-800 border border-yellow-300 text-yellow-300 p-2 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-md">
        <Search className="text-yellow-300 size-5" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-yellow-300 placeholder-yellow-300 w-full"
        />
      </div>

      {/* Membership Offer & User Button */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Membership Offer - Responsive Text */}
        <h2
          className="bg-yellow-300 p-2 rounded-full text-xs sm:text-sm md:text-md 
    text-black font-semibold px-3 shadow-lg transition-all duration-300"
        >
          <span className="block sm:hidden">🔥</span>{" "}
          {/* Show only emoji on extra-small screens */}
          <span className="hidden sm:inline md:hidden">🔥 ₹99/Month</span>{" "}
          {/* Short text for small screens */}
          <span className="hidden md:inline">
            🔥 Join Membership – Just ₹99/Month
          </span>{" "}
          {/* Full text for medium+ screens */}
        </h2>

        {/* User Avatar */}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "border-2 border-yellow-300 shadow-md",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Header;
