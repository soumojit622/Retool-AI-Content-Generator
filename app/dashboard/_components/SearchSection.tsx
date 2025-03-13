import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="p-10 bg-gradient-to-br from-black via-yellow-800 
    to-black flex flex-col justify-center items-center text-white shadow-xl"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-yellow-400">
        Browse All Templates
      </h2>
      <p className="text-yellow-300">What would you like to create today?</p>

      {/* Search Box */}
      <div className="w-full flex justify-center">
        <div
          className="flex gap-3 items-center p-3 border-2 border-yellow-500 rounded-lg 
          bg-black/80 my-5 w-[50%] shadow-md hover:shadow-yellow-500/50 transition-all duration-300"
        >
          <Search className="text-yellow-500" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-yellow-200 placeholder-yellow-500"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
