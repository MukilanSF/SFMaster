import React from "react";
import "prismjs/components/prism-java"; // Import Java for Apex-like syntax
import "prismjs/themes/prism.css"; // Import Prism CSS for syntax highlighting

const areas = [
  { title: "Apex Challenges", desc: "Test Apex logic with real-time coding", icon: "⚡" },
  { title: "LWC Practice", desc: "Build & test Lightning Web Components", icon: "💡" },
  { title: "Integration Scenarios", desc: "Hands-on with REST APIs and external data", icon: "🔗" },
];

const levels = [
  { name: "Beginner", emoji: "👶" },
  { name: "Intermediate", emoji: "🧑‍💻" },
  { name: "Master", emoji: "🧙‍♂️" },
];

export default function Hero({ onAreaLevelSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {areas.map((area) => (
        <div
          key={area.title}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-3">{area.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
          <p className="text-gray-600 mb-4">{area.desc}</p>
          <div className="flex flex-col gap-2 mt-4">
            {levels.map((level) => (
              <button
                key={level.name}
                className="w-full flex items-center justify-start gap-2 bg-gray-100 px-4 py-2 rounded-lg font-semibold text-base shadow hover:bg-blue-100 transition"
                onClick={() => onAreaLevelSelect(area.title, level.name)}
              >
                <span className="text-xl">{level.emoji}</span>
                <span>{level.name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

