import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  useEffect(() => {
    // Enable :active pseudo-class on mobile Safari/iOS
    const handleTouchStart = () => {};
    document.body.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
