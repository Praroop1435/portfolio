export default function Footer() {
  return (
    <footer style={{
      padding: "24px 6vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid var(--mac-border)",
      marginTop: "40px"
    }}>
      <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--mac-text-secondary)" }}>
        Praroop Anand
      </span>
      <span style={{ fontSize: "12px", color: "var(--mac-text-tertiary)" }}>
        © 2026 — All rights reserved
      </span>
    </footer>
  );
}
