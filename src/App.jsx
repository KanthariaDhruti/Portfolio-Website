import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/landing";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
