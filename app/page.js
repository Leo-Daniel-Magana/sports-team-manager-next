"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0d1117",
        minHeight: "100vh",
        color: "#c9d1d9",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          color: "#58a6ff",
          fontWeight: "bold",
        }}
      >
        PlayNation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
          color: "#8b949e",
        }}
      >
        Welcome to PlayNation, the ultimate hub for sports enthusiasts. Navigate through
        our pages to explore schedules, team records, and much more!
      </motion.p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#21262d",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href="/team" style={{ textDecoration: "none", color: "#58a6ff" }}>
            Team Manager
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#21262d",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href="/schedule" style={{ textDecoration: "none", color: "#58a6ff" }}>
            Schedule
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#21262d",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <Link href="/team-records" style={{ textDecoration: "none", color: "#58a6ff" }}>
            Team Records
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
