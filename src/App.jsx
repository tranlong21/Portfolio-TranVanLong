import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app/globals.css';

import Home from "./page/Home";
import Projects from "./page/Projects";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
