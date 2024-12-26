import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "0",
          padding: "0",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#2b2d42",
          color: "#edf2f4",
          minHeight: "100vh",
        }}
      >
        {/* Navigation Bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#8d99ae",
            color: "#edf2f4",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            PlayNation
          </h1>
          <nav>
            <div style={{ display: "flex", gap: "15px" }}>
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#edf2f4",
                  padding: "10px 15px",
                  backgroundColor: "#2b2d42",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
              >
                Home
              </Link>
              <Link
                href="/team"
                style={{
                  textDecoration: "none",
                  color: "#edf2f4",
                  padding: "10px 15px",
                  backgroundColor: "#2b2d42",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
              >
                Team Manager
              </Link>
              <Link
                href="/schedule"
                style={{
                  textDecoration: "none",
                  color: "#edf2f4",
                  padding: "10px 15px",
                  backgroundColor: "#2b2d42",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
              >
                Schedule
              </Link>
              <Link
                href="/team-records"
                style={{
                  textDecoration: "none",
                  color: "#edf2f4",
                  padding: "10px 15px",
                  backgroundColor: "#2b2d42",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
              >
                Team Records
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
