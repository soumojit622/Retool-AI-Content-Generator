"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    { name: "Billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  const path = usePathname();

  return (
    <div className="h-screen w-64 relative p-6 border-r border-yellow-500 bg-[#0d0d0d] text-yellow-300 shadow-lg flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center mb-8">
        <Image src="/logo.svg" alt="logo" width={150} height={100} />
      </div>

      {/* Divider */}
      <hr className="mb-8 border-yellow-500 opacity-40" />

      {/* Navigation Menu */}
      <div className="flex flex-col space-y-6 flex-1">
        {MenuList.map((menu) => (
          <Link key={menu.path} href={menu.path} className="relative">
            <div
              className={`group flex gap-4 px-5 py-4 items-center rounded-xl
    cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out border-2 border-transparent
    ${
      path === menu.path
        ? "bg-yellow-400 text-black shadow-xl scale-[1.05] "
        : "bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black hover:scale-[1.03] border-yellow-500 transition-all duration-300"
    }`}
            >
              {/* Icon with Glow Effect */}
              <div className="relative">
                <menu.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-black" />
                {/* Soft Glow on Hover */}
                <div className="absolute inset-0 w-6 h-6 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              </div>

              {/* Static Text (No Animation) */}
              <h2 className="text-lg font-semibold tracking-wide">
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Usage Tracker with More Space */}
      <div className="mt-10">
        <UsageTrack />
      </div>

      {/* Soft Glow at Bottom for Aesthetic Look */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-yellow-500 opacity-10 blur-xl animate-pulse"></div>
    </div>
  );
}

export default SideNav;
