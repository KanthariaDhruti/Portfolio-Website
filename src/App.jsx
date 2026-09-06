import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components for route-level code splitting
const Landing = lazy(() => import("./components/Landing"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

// Minimal loading spinner fallback
const PageLoader = () => (
  <div className="min-h-screen bg-pearl flex flex-col items-center justify-center space-y-4">
    <div className="w-10 h-10 border-4 border-ocean/20 border-t-brown rounded-full animate-spin"></div>
    <span className="text-xs font-mono tracking-widest text-ocean/60 uppercase">
      Loading...
    </span>
  </div>
);

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
    <Router>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
}

export default App;
