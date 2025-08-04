import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // thay BrowserRouter bằng HashRouter
import './app/globals.css';

import Home from "./page/Home";
import Projects from "./page/Projects";
import About from "./page/About";
import Feedback from "./page/Feedback";

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
