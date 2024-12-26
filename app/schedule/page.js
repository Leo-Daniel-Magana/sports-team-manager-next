"use client";

import { motion } from "framer-motion";

const schedule = [
  { date: "2024-01-01", teams: "Lakers vs Warriors", time: "7:00 PM", location: "Staples Center" },
  { date: "2024-01-05", teams: "Suns vs Lakers", time: "6:00 PM", location: "Footprint Center" },
  { date: "2024-01-10", teams: "Warriors vs Suns", time: "8:00 PM", location: "Chase Center" },
];

export default function Schedule() {
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
        Game Schedule
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
              Date
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
              Teams
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
              Time
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
              Location
            </motion.th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((game, index) => (
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
                }}
              >
                {game.date}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {game.teams}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {game.time}
              </td>
              <td style={{ border: "1px solid #30363d", padding: "10px", textAlign: "center" }}>
                {game.location}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
