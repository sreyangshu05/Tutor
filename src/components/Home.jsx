import React, { useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Particles from "react-tsparticles";
import "../styles/Home.css";

// Dummy animation JSON (Replace this with actual animation data)
const dummyAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  nm: "Dummy Animation",
  ddd: 0,
  assets: [],
  layers: [],
};

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="home-container">
      {showConfetti && <Confetti />}
      <Particles className="particles" />

      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Welcome to <span className="highlight">AI Python Tutor! 🐍🤖</span>
          </h1>
          <p>Learn Python in a fun and interactive way with our AI-powered tutor! 🚀</p>
          <ul>
          <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="https://python-tutor-gz4y.onrender.com//chat" style={{ textDecoration: "none"}}>🤖 Chat with an AI tutor</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>💡 Solve coding exercises</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>⚡ Get instant feedback</motion.li>
          </ul>
          <motion.button
            className="cta-button"
            onClick={handleButtonClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Learning
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={dummyAnimation} loop={true} />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
