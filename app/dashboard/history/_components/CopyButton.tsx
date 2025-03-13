"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

interface CopyButtonProps {
  aiResponse: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ aiResponse }) => {
  const handleCopy = () => {
    console.log("Button clicked!"); // Check if the button works
    navigator.clipboard
      .writeText(aiResponse)
      .then(() => {
        console.log("Text copied to clipboard!");
        toast.success("Copied to clipboard ✅");
      })
      .catch((err) => {
        console.error("Failed to copy.", err);
        toast.error("Failed to copy. Please try again.");
      });
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-all"
      onClick={handleCopy}
    >
      <Copy className="w-4 h-4" />
      Copy
    </Button>
  );
};

export default CopyButton;
