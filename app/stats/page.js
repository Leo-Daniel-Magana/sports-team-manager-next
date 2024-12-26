"use client";

const players = [
  { name: "LeBron James", points: 27.5, assists: 7.3, rebounds: 8.5, team: "Lakers", icon: "🏀" },
  { name: "Stephen Curry", points: 29.1, assists: 6.2, rebounds: 5.1, team: "Warriors", icon: "🎯" },
  { name: "Kevin Durant", points: 28.4, assists: 5.8, rebounds: 7.2, team: "Suns", icon: "🔥" },
];

export default function PlayerStats() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#2b2d42",
        color: "#edf2f4",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#8d99ae", marginBottom: "20px" }}>Player Statistics</h1>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "90%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#edf2f4",
          color: "#2b2d42",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Icon
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Name
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Points
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Assists
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Rebounds
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px", backgroundColor: "#8d99ae", color: "#edf2f4" }}>
              Team
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef",
                transition: "background-color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#bde0fe")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f8f9fa" : "#e9ecef")
              }
            >
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {player.icon}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{player.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{player.points}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{player.assists}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{player.rebounds}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{player.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
