import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retool | Unleash AI-Powered Creativity!",
  description:
    "Write smarter, faster, and better with Retool – the AI content generator that brings your ideas to life! 🚀✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#facc15", // Bright yellow primary color
          colorBackground: "#1f2937", // Dark gray background for contrast
          colorInputBackground: "#374151", // Slightly lighter gray for input fields
          colorInputText: "#FDE68A", // Light yellow text for better readability
        },
        elements: {
          formButtonPrimary: "bg-yellow-500 hover:bg-yellow-600 text-black", // Yellow button with hover effect
          card: "bg-gray-900", // Darker card background for better contrast
          headerTitle: "text-yellow-400", // Yellow title for better visibility
          headerSubtitle: "text-yellow-300", // Softer yellow subtitle for aesthetics
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
