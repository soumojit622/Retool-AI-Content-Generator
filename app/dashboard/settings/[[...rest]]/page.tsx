import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex items-center justify-center h-full bg-black text-yellow-300">
      <div className="p-6 mt-6 bg-black rounded-2xl shadow-xl border">
        <UserProfile
          appearance={{
            elements: {
              rootBox: "bg-transparent text-white",
              card: "bg-[#1a1a1a] border border-yellow-500 shadow-md rounded-lg",
              headerTitle: "text-yellow-400 text-xl font-semibold",
              headerSubtitle: "text-gray-400 text-sm",
              profileSectionTitle: "text-yellow-300 font-medium",
              profileSectionContent: "text-white",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Settings;
