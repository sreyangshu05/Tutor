import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Smooth animations
import confetti from "canvas-confetti"; // Fun effect on click
import { Home, MessageCircle } from "lucide-react"; // Simple icons

import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation(); // Get current route for active styling

  // Function to trigger confetti effect on click
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
    });
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-brand"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link to="https://python-tutor-gz4y.onrender.com//" className="logo">🎨 FunLearn</Link> {/* Playful app name */}
      </motion.div>

      <div className="nav-links">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={triggerConfetti}
        >
          <Link to="https://python-tutor-gz4y.onrender.com//" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Home className="nav-icon" size={24} />
            Home
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={triggerConfetti}
        >
          <Link to="https://python-tutor-gz4y.onrender.com//chat" className={`nav-item ${location.pathname === "/chat" ? "active" : ""}`}>
            <MessageCircle className="nav-icon" size={24} />
            Chat
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
