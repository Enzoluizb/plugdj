import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Room from "../src/components/Room.js";  

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </Router>
  );
}
