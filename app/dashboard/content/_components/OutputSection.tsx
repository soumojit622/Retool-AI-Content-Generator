"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css"; // Default CSS
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // ✅ Import Dark Theme
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Dynamically import Editor with SSR disabled
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => (
      <p className="text-gray-400 text-center">Loading Editor...</p>
    ), // Styled Loading Text
  }
);

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="dark:bg-black/90 shadow-lg border dark:border-gray-700 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
          ✨ Your Result
        </h2>
        <Button
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300"
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>

      {/* Toast UI Editor with Dark Mode */}
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        theme="dark" // ✅ Enable Dark Mode
        className="p-4"
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
