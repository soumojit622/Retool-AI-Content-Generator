import {
  BadgeCheck,
  FileText,
  Headphones,
  Rocket,
  Settings,
  UserCircle,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
            <div>
              {/* <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> */}
              <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
              {/* </button> */}
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              <Link
                href="/dashboard"
                className="flex items-center gap-x-2 font-medium text-gray-600 hover:text-yellow-600 
      sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 
      dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-yellow-500 
      transition-all duration-300 ease-in-out"
              >
                <UserCircle className="size-5 text-gray-500 dark:text-neutral-400 transition-all duration-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-500" />
                <span className="text-base">Get Started</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-3 bg-white border border-gray-300 text-sm text-gray-900 font-medium
      px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:border-gray-400
      dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500 
      transition-all duration-300 ease-in-out"
              href="https://github.com/shohail-DeV/Creator-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserPlus className="size-5 text-gray-700 dark:text-gray-300" />{" "}
              {/* 👤 Lucide UserPlus Icon */}
              <span>CreatorAI Membership - Join Now</span>
              {/* Badge with Arrow Icon */}
              <span
                className="py-1.5 px-3 inline-flex justify-center items-center gap-x-2 rounded-full 
      bg-gray-200 text-gray-600 font-semibold text-sm dark:bg-neutral-700 dark:text-neutral-400"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-8 max-w-2xl text-center mx-auto">
            <h1 className="relative inline-block font-extrabold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              AI Content&nbsp;
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 ease-in-out">
                Generator
              </span>
              {/* Glowing Effect */}
              <span className="absolute inset-0 -z-10 blur-xl opacity-40 bg-yellow-500/30 rounded-lg group-hover:opacity-70 transition-all duration-300"></span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              className="inline-flex items-center gap-x-3 text-center bg-gradient-to-br from-yellow-500 to-yellow-700 
      hover:from-yellow-600 hover:to-yellow-800 border border-yellow-500 shadow-lg shadow-yellow-500/30
      text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 
      focus:ring-offset-2 dark:focus:ring-offset-gray-800 py-3 px-6 transition-all duration-300 ease-in-out"
              href="/dashboard"
            >
              <Rocket className="size-5 text-white animate-bounce" />{" "}
              {/* 🚀 Rocket Icon */}
              Get Started
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* LAST 4 CARDS */}
      <div className="max-w-[85rem] px-6 py-12 sm:px-8 lg:px-12 lg:py-16 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
          {/* Card 1 */}
          <a
            className="group flex flex-col items-center text-center rounded-2xl p-8 bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.6)]"
            href="#"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-yellow-600 rounded-2xl dark:bg-yellow-500 shadow-lg">
              <FileText className="text-white w-10 h-10" />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-200 dark:text-white group-hover:text-yellow-400">
                25+ Templates
              </h3>
              <p className="mt-2 text-gray-400">
                Responsive and mobile-first designs.
              </p>
              <span className="mt-3 inline-flex items-center gap-x-1.5 text-sm text-yellow-400 font-medium group-hover:underline">
                Learn more →
              </span>
            </div>
          </a>

          {/* Card 2 */}
          <a
            className="group flex flex-col items-center text-center rounded-2xl p-8 bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.6)]"
            href="#"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-yellow-600 rounded-2xl dark:bg-yellow-500 shadow-lg">
              <Settings className="text-white w-10 h-10" />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-200 dark:text-white group-hover:text-yellow-400">
                Customizable
              </h3>
              <p className="mt-2 text-gray-400">
                Easily customizable and extendable components.
              </p>
              <span className="mt-3 inline-flex items-center gap-x-1.5 text-sm text-yellow-400 font-medium group-hover:underline">
                Learn more →
              </span>
            </div>
          </a>

          {/* Card 3 */}
          <a
            className="group flex flex-col items-center text-center rounded-2xl p-8 bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.6)]"
            href="#"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-yellow-600 rounded-2xl dark:bg-yellow-500 shadow-lg">
              <BadgeCheck className="text-white w-10 h-10" />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-200 dark:text-white group-hover:text-yellow-400">
                Free to Use
              </h3>
              <p className="mt-2 text-gray-400">
                Well-documented components and plugins.
              </p>
              <span className="mt-3 inline-flex items-center gap-x-1.5 text-sm text-yellow-400 font-medium group-hover:underline">
                Learn more →
              </span>
            </div>
          </a>

          {/* Card 4 */}
          <a
            className="group flex flex-col items-center text-center rounded-2xl p-8 bg-gray-900 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,224,71,0.6)]"
            href="#"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-yellow-600 rounded-2xl dark:bg-yellow-500 shadow-lg">
              <Headphones className="text-white w-10 h-10" />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-200 dark:text-white group-hover:text-yellow-400">
                24/7 Support
              </h3>
              <p className="mt-2 text-gray-400">
                Contact us anytime, anywhere.
              </p>
              <span className="mt-3 inline-flex items-center gap-x-1.5 text-sm text-yellow-400 font-medium group-hover:underline">
                Learn more →
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
