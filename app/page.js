"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#1c1e24", color: "#ffffff" }}>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#58a6ff", fontSize: "3rem", marginBottom: "20px" }}
      >
        Welcome to PlayNation
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{ fontSize: "1.5rem", marginBottom: "30px" }}
      >
        Your ultimate hub for managing sports teams.
      </motion.p>
      <motion.a
        href="/team"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          textDecoration: "none",
          color: "#ffffff",
          backgroundColor: "#58a6ff",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        whileHover={{ backgroundColor: "#1f6feb" }}
      >
        Get Started
      </motion.a>
    </div>
  );
}
