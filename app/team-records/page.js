"use client";

import { motion } from "framer-motion";

const teamRecords = [
  { team: "Lakers", wins: 52, losses: 30, percentage: "63.4%", coach: "Darvin Ham" },
  { team: "Warriors", wins: 48, losses: 34, percentage: "58.5%", coach: "Steve Kerr" },
  { team: "Suns", wins: 50, losses: 32, percentage: "61.0%", coach: "Frank Vogel" },
];

export default function TeamRecords() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0d1117", // Dark background for contrast
        minHeight: "100vh",
        color: "#c9d1d9", // Light text color
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#58a6ff", // Bright blue for the title
        }}
      >
        Team Records
      </h1>
      <table
        style={{
          margin: "0 auto",
          width: "90%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
          backgroundColor: "#161b22", // Subtle contrast for table background
        }}
      >
        <thead>
          <tr>
            <motion.th
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                border: "1px solid #30363d",
                padding: "10px",
                backgroundColor: "#21262d", // Darker header background
                color: "#58a6ff", // Bright blue header text
              }}
            >
              Team
            </motion.th>
            <motion.th
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                border: "1px solid #30363d",
                padding: "10px",
                backgroundColor: "#21262d",
                color: "#58a6ff",
              }}
            >
              Wins
            </motion.th>
            <motion.th
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                border: "1px solid #30363d",
                padding: "10px",
                backgroundColor: "#21262d",
                color: "#58a6ff",
              }}
            >
              Losses
            </motion.th>
            <motion.th
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                border: "1px solid #30363d",
                padding: "10px",
                backgroundColor: "#21262d",
                color: "#58a6ff",
              }}
            >
              Win Percentage
            </motion.th>
            <motion.th
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              style={{
                border: "1px solid #30363d",
                padding: "10px",
                backgroundColor: "#21262d",
                color: "#58a6ff",
              }}
            >
              Coach
            </motion.th>
          </tr>
        </thead>
        <tbody>
          {teamRecords.map((record, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              whileHover={{
                backgroundColor: "#58a6ff",
                color: "#0d1117", // Dark text on hover for contrast
                transition: { duration: 0.3 },
              }}
              style={{
                backgroundColor: index % 2 === 0 ? "#161b22" : "#21262d", // Alternating row colors
                cursor: "pointer",
              }}
            >
              <td
                style={{
                  border: "1px solid #30363d",
                  padding: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {record.team}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {record.wins}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {record.losses}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {record.percentage}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {record.coach}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
