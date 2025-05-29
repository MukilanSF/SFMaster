import React from "react";
import "prismjs/components/prism-java"; // Import Java for Apex-like syntax
import "prismjs/themes/prism.css"; // Import Prism CSS for syntax highlighting

const SALESFORCE_LOGIN_URL = "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI";

export default function Header() {
  const handleLogin = () => {
    window.location.href = SALESFORCE_LOGIN_URL;
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SFMaster</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleLogin}
      >
        Login with Salesforce
      </button>
    </header>
  );
}