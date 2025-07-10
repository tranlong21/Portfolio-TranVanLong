import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app/globals.css';

import Home from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
