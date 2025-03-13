import { Loader2Icon } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0d0d]">
      <div className="relative flex flex-col items-center">
        {/* Spinning Loader */}
        <Loader2Icon className="animate-spin h-12 w-12 text-yellow-400 drop-shadow-lg" />

        {/* Soft Glow Effect */}
        <div className="absolute w-16 h-16 bg-yellow-400 opacity-20 blur-xl rounded-full"></div>

        {/* Loading Text (Optional) */}
        <p className="mt-4 text-yellow-300 font-medium tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;
