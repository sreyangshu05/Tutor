import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../styles/ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("https://python-tutor-gz4y.onrender.com//ask", {
        message: input,
      });

      setMessages([
        ...newMessages,
        { text: response.data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { text: "⚠️ Error: Unable to get response", sender: "bot", error: true },
      ]);
    }
  };

  return (
    <div className="chat-container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "#f8f9fa" },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      <h1 className="chat-title">AI Python Tutor</h1>
      <p className="chat-subtitle">
        Your friendly Python assistant. Ask any Python-related question!
      </p>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`chat-message ${msg.sender} ${msg.error ? "error" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <strong>{msg.sender === "user" ? "You:" : "Bot:"}</strong> {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask a Python question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
