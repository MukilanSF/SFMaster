import React from "react";

export default function Header({ onLogin }: { onLogin: () => void }) {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-700">SFMaster</h1>
      <button
        onClick={onLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        Login to Salesforce
      </button>
    </header>
  );
}
