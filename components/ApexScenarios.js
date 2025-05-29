import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-java"; // Use Java highlighting for Apex-like look

function ApexScenarios() {
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/apex-scenarios")
      .then((res) => res.json())
      .then((data) => setScenarios(data))
      .catch((err) => console.error("Error fetching scenarios:", err));
  }, []);

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
    setUserCode(scenario.starterCode || "");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Apex Scenarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white shadow-md rounded p-4 cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleScenarioSelect(scenario)}
          >
            <h3 className="text-xl font-semibold">{scenario.title}</h3>
            <p className="text-sm text-gray-600">{scenario.level}</p>
          </div>
        ))}
      </div>

      {selectedScenario && (
        <div className="mt-6 bg-white rounded shadow-lg p-6">
          <h3 className="text-xl font-bold">{selectedScenario.title}</h3>
          <p className="text-sm mb-2 text-gray-500">{selectedScenario.level}</p>
          <p className="mb-4">{selectedScenario.description}</p>

          <h4 className="font-semibold mb-1">Hints:</h4>
          <ul className="list-disc pl-5 mb-4">
            {selectedScenario.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>

          <h4 className="font-semibold mb-1">Code Workspace:</h4>
          <div className="border rounded p-2 bg-gray-800 text-white mb-4">
            <Editor
              value={userCode}
              onValueChange={setUserCode}
              highlight={(code) => highlight(code, languages.java, 'java')} // using Java for Apex
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                minHeight: "200px",
              }}
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Run Code (Coming Soon)
          </button>
        </div>
      )}
    </div>
  );
}

export default ApexScenarios;