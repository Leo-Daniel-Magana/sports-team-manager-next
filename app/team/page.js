"use client";

import { motion } from "framer-motion";

const teams = [
  { id: 1, name: "Lakers", coach: "Darvin Ham", wins: 52, losses: 30, color: "#552583" },
  { id: 2, name: "Warriors", coach: "Steve Kerr", wins: 48, losses: 34, color: "#006BB6" },
  { id: 3, name: "Suns", coach: "Frank Vogel", wins: 45, losses: 37, color: "#E56020" },
];

export default function TeamManager() {
  const deleteTeam = (id) => {
    console.log(`Team with id ${id} deleted!`);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1e1e2f",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#ffca28",
        }}
      >
        Team Manager
      </h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {teams.map((team) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              background: team.color,
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{team.name}</h3>
            <p>Coach: {team.coach}</p>
            <p>Wins: {team.wins}</p>
            <p>Losses: {team.losses}</p>
            <button
              onClick={() => deleteTeam(team.id)}
              style={{
                padding: "8px 15px",
                background: "#ff6b6b",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Delete Team
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
