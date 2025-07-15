import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app/globals.css';

import Home from "./page/Home";
import Projects from "./page/Projects";
import About from "./page/About";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
