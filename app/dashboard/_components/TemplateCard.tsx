import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item?.slug}`} className="group">
      <div
        className="p-5 sm:p-6 md:p-7 rounded-xl border border-yellow-600 bg-[#121212]/90 
        backdrop-blur-lg shadow-lg flex flex-col items-center gap-4 sm:gap-5 md:gap-6 cursor-pointer 
        hover:scale-105 transition-all duration-300 ease-out hover:border-yellow-400 
        hover:shadow-[0px_0px_15px_3px_rgba(255,223,0,0.5)] relative overflow-hidden w-full"
      >
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-900/10 opacity-10 group-hover:opacity-20 transition-all duration-500"></div>

        {/* Icon with Glow */}
        <div className="relative flex justify-center">
          <div className="relative">
            <Image
              src={item.icon}
              alt="icon"
              width={50}
              height={50}
              className="drop-shadow-lg sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
            />
            <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-lg sm:text-xl text-yellow-300 text-center">
          {item.name}
        </h2>

        {/* Description with Soft Fade Effect */}
        <p className="text-gray-300 text-sm sm:text-md text-center line-clamp-3 group-hover:text-yellow-300 transition-all duration-300 px-2 sm:px-4 md:px-6">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}

export default TemplateCard;
