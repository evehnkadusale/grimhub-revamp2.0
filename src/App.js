import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css';

import Section1 from "./components/landingpageComponents/Section1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sect1" element={<Section1 />}/>
      </Routes>
    </Router>
  );
}

export default App;
