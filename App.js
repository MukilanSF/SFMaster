import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";


function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <PracticeAreas />
      </div>
    </div>
  );
}

export default App;