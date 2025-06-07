"use client";
import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";

type CodeEditorProps = {
  starterCode?: string;
  language: string;
  onRun?: (code: string) => void;
};

export default function CodeEditor({ starterCode, language, onRun }: CodeEditorProps) {
  const [code, setCode] = useState(starterCode || "");

  return (
    <div className="my-4 border-2 border-blue-400 rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 p-2 transition-all duration-300 hover:shadow-2xl">
      <MonacoEditor
        height="400px"
        defaultLanguage={language}
        value={code}
        onChange={value => setCode(value || "")}
        theme="vs-dark"
        options={{ fontSize: 15, minimap: { enabled: false }, fontLigatures: true, fontFamily: 'Fira Mono, monospace' }}
      />
      <button
        className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-lg w-full font-bold text-lg tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-bounce"
        onClick={() => onRun ? onRun(code) : alert('Run functionality coming soon! 🚀')}
      >
        <span role="img" aria-label="run">⚡</span> Run
      </button>
    </div>
  );
}
