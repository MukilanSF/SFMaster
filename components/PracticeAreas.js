import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import "prismjs/components/prism-java";
import "prismjs/themes/prism.css"; // Import Prism CSS for syntax highlighting

const API_BASE = "http://localhost:3000/api"; // Adjust if needed

// Helper to group questions by level
const groupByLevel = (arr) => ({
  Beginner: arr.filter((c) => c.level === "Beginner"),
  Intermediate: arr.filter((c) => c.level === "Intermediate"),
  Master: arr.filter((c) => c.level === "Master"),
});

export default function PracticeAreas() {
  // UI state
  const [showApexList, setShowApexList] = useState(false);
  const [showLwcList, setShowLwcList] = useState(false);
  const [showIntegrationList, setShowIntegrationList] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedLwc, setSelectedLwc] = useState(null);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const [apexScenarios, setApexScenarios] = useState([]);
  const [lwcQuestions, setLwcQuestions] = useState([]);
  const [integrationQuestions, setIntegrationQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data on mount
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${API_BASE}/apexscenarios`).then((res) => res.json()),
      fetch(`${API_BASE}/lwcquestions`).then((res) => res.json()),
      fetch(`${API_BASE}/integrationscenarios`).then((res) => res.json()),
    ])
      .then(([apex, lwc, integration]) => {
        setApexScenarios(apex);
        setLwcQuestions(lwc);
        setIntegrationQuestions(integration);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Failed to load questions. Please try again later.");
        // Optionally log error: console.error(err);
      });
  }, []);

  // Handler for Hero navigation
  const handleAreaLevelSelect = (area, level) => {
    setSelectedLevel(level);
    setSelectedChallenge(null);
    setSelectedLwc(null);
    setSelectedIntegration(null);

    if (area === "Apex Challenges") {
      setShowApexList(true);
      setShowLwcList(false);
      setShowIntegrationList(false);
    } else if (area === "LWC Practice") {
      setShowApexList(false);
      setShowLwcList(true);
      setShowIntegrationList(false);
    } else if (area === "Integration Scenarios") {
      setShowApexList(false);
      setShowLwcList(false);
      setShowIntegrationList(true);
    }
  };

  // --- Apex Challenge List UI ---
  if (showApexList && !selectedChallenge) {
    const grouped = groupByLevel(apexScenarios);
    return (
      <div className="flex flex-col h-[70vh] p-8">
        <div className="mb-4">
          <button
            className="text-blue-600 hover:text-blue-800 flex items-center"
            title="Back"
            onClick={() => setShowApexList(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-left">Apex Challenges – {selectedLevel}</h2>
        <ul className="w-full max-w-2xl text-left">
          {grouped[selectedLevel]?.length === 0 && (
            <li className="p-4 text-gray-400">No questions</li>
          )}
          {grouped[selectedLevel]?.map((q) => (
            <li
              key={q.id}
              className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-blue-50 transition"
            >
              <div>
                <div className="font-semibold">{q.title}</div>
                <div className="text-gray-500 text-sm">{q.description}</div>
              </div>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setSelectedChallenge(q)}
              >
                Open Editor
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // --- LWC Practice List UI ---
  if (showLwcList && !selectedLwc) {
    const grouped = groupByLevel(lwcQuestions);
    return (
      <div className="flex flex-col h-[70vh] p-8">
        <div className="mb-4">
          <button
            className="text-blue-600 hover:text-blue-800 flex items-center"
            title="Back"
            onClick={() => setShowLwcList(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-left">LWC Practice – {selectedLevel}</h2>
        <ul className="w-full max-w-2xl text-left">
          {grouped[selectedLevel]?.length === 0 && (
            <li className="p-4 text-gray-400">No questions</li>
          )}
          {grouped[selectedLevel]?.map((q) => (
            <li
              key={q.id}
              className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-blue-50 transition"
            >
              <div>
                <div className="font-semibold">{q.title}</div>
                <div className="text-gray-500 text-sm">{q.description}</div>
              </div>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setSelectedLwc(q)}
              >
                Open Editor
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // --- Integration Scenarios List UI ---
  if (showIntegrationList && !selectedIntegration) {
    const grouped = groupByLevel(integrationQuestions);
    return (
      <div className="flex flex-col h-[70vh] p-8">
        <div className="mb-4">
          <button
            className="text-blue-600 hover:text-blue-800 flex items-center"
            title="Back"
            onClick={() => setShowIntegrationList(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-left">Integration Scenarios – {selectedLevel}</h2>
        <ul className="w-full max-w-2xl text-left">
          {grouped[selectedLevel]?.length === 0 && (
            <li className="p-4 text-gray-400">No questions</li>
          )}
          {grouped[selectedLevel]?.map((q) => (
            <li
              key={q.id}
              className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-blue-50 transition"
            >
              <div>
                <div className="font-semibold">{q.title}</div>
                <div className="text-gray-500 text-sm">{q.description}</div>
              </div>
              <button
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setSelectedIntegration(q)}
              >
                Open Editor
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (loading) return <div>Loading questions...</div>;

  // --- Show Hero as landing page ---
  return <Hero onAreaLevelSelect={handleAreaLevelSelect} />;
}
