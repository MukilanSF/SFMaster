import React from "react";

type ScenarioCardsProps = {
  onLevelClick: (category: string, level: string) => void;
};

const levels = ["Beginner", "Intermediate", "Master"];
const categories = [
  { key: "apex_scenarios", label: "Apex Scenarios" },
  { key: "lwc_scenarios", label: "LWC Scenarios" },
  { key: "integration_scenarios", label: "Integration Scenarios" },
];

export default function ScenarioCards({ onLevelClick }: ScenarioCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {categories.map((cat) => (
        <div key={cat.key} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 text-blue-700">{cat.label}</h2>
          <div className="flex flex-col gap-3 w-full">
            {levels.map((level) => (
              <button
                key={level}
                className={`w-full px-4 py-2 rounded font-semibold transition text-white ${
                  level === "Beginner"
                    ? "bg-green-500 hover:bg-green-600"
                    : level === "Intermediate"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                onClick={() => onLevelClick(cat.key, level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
