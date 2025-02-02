import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatWindow from "./components/ChatWindow";
// import Settings from "./components/Settings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="https://python-tutor-gz4y.onrender.com//" element={<Home />} />
        <Route path="https://python-tutor-gz4y.onrender.com//chat" element={<ChatWindow />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
