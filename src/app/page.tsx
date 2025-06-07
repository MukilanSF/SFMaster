"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ScenarioCards from "../components/ScenarioCards";
import { supabase } from "../supabaseClient";
import CodeEditor from "../components/CodeEditor";
import { saveSubmission } from "../api/saveSubmission";
import { executeApexInSalesforce } from "../api/executeApex";

type Question = {
  id: string;
  title: string;
  description: string;
  level: string;
  starter_code: string;
  hints: string[] | string;
};

type Selected = {
  category: string;
  level: string;
};

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Selected | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [runResult, setRunResult] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSFLoggedIn, setIsSFLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("sf_access_token");
      setIsSFLoggedIn(!!token);
    }
  }, []);

  const handleSalesforceLogin = () => {
    const from = window.location.pathname + window.location.search;
    window.location.href = `/api/salesforce/login?from=${encodeURIComponent(from)}`;
  };

  const handleLevelClick = async (category: string, level: string) => {
    setLoading(true);
    setSelected({ category, level });
    setSelectedQuestion(null);
    const { data, error } = await supabase
      .from(category)
      .select("id, title, description, level, starter_code, hints")
      .eq("level", level);
    setQuestions(data || []);
    setLoading(false);
  };

  const handleRun = async (code: string) => {
    if (!isSFLoggedIn) {
      alert("Please login to your Salesforce Developer Org before running code.");
      return;
    }
    setRunResult("Running code in Salesforce org...");
    try {
      const { success, result } = await executeApexInSalesforce(code);
      setRunResult(result);
      if (userId && selectedQuestion && selected) {
        try {
          await saveSubmission({
            user_id: userId,
            scenario_id: selectedQuestion.id,
            category: selected.category,
            code,
            result,
            status: success ? "pass" : "fail",
          });
          console.log("Submission saved to Supabase.");
        } catch (err) {
          console.error("Failed to save submission:", err);
        }
      }
    } catch (err: any) {
      setRunResult("Error executing code: " + (err?.message || err));
      console.error("Apex execution error:", err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header onLogin={handleSalesforceLogin} />
        <div className="max-w-5xl mx-auto mt-8 p-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Welcome, Salesforce Developer!</h2>
          <p className="mb-8 text-gray-700">
            {isSFLoggedIn ? (
              <span className="text-green-600 font-semibold">Connected to Salesforce Developer Org!</span>
            ) : (
              <>Practice real-world Apex, LWC, and Integration challenges. Select a category and level to get started.</>
            )}
          </p>
          <ScenarioCards onLevelClick={handleLevelClick} />
          {loading && <div className="mt-8 text-blue-600 font-semibold">Loading questions...</div>}
          {selected && !loading && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">{selected.level} {selected.category.replace("_scenarios", "")} Questions</h3>
              <ul className="space-y-4">
                {questions.map((q) => (
                  <li
                    key={q.id}
                    className="bg-white rounded shadow p-4 cursor-pointer hover:bg-blue-50 transition"
                    onClick={() => setSelectedQuestion(q)}
                  >
                    <div className="font-semibold text-lg mb-1">{q.title}</div>
                    <div className="text-gray-700 mb-2">{q.description}</div>
                    <div className="text-xs text-gray-500">Level: {q.level}</div>
                  </li>
                ))}
                {questions.length === 0 && <li className="text-gray-500">No questions found for this level.</li>}
              </ul>
              {selectedQuestion && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-2">{selectedQuestion.title}</h3>
                  <div className="mb-2 text-sm font-semibold text-blue-700">{selectedQuestion.level}</div>
                  <p className="mb-4 text-gray-700 whitespace-pre-line">{selectedQuestion.description}</p>
                  <div className="mb-4">
                    <span className="font-semibold">Hints:</span>
                    <ul className="list-disc ml-6 text-gray-600">
                      {Array.isArray(selectedQuestion.hints)
                        ? selectedQuestion.hints.map((hint, i) => (
                            <li key={i}>{hint}</li>
                          ))
                        : selectedQuestion.hints
                        ? <li>{selectedQuestion.hints}</li>
                        : <li className="text-gray-400">No hints available.</li>}
                    </ul>
                  </div>
                  <div className="my-6">
                    <CodeEditor
                      starterCode={selectedQuestion.starter_code}
                      language={selected?.category.startsWith("apex") ? "apex" : "javascript"}
                      onRun={handleRun}
                    />
                    {runResult && (
                      <div className="mt-4 p-4 bg-gray-900 text-green-300 rounded shadow font-mono whitespace-pre-wrap">
                        {runResult}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer with Contact Us link */}
      <footer className="w-full fixed bottom-0 left-0 flex justify-center items-center py-4 bg-transparent">
        <a
          href="mailto:developermukilan@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Contact Us
        </a>
      </footer>
    </>
  );
}
