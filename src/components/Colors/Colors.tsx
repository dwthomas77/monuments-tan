import colors from "../../theme/colors";

export default function ColorsView() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", padding: "32px" }}>
      {Object.entries(colors).map(([name, value]) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              background: value,
              border: "2px solid #eee",
              marginBottom: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
          <span style={{ fontSize: "15px", color: "#333" }}>{name}</span>
          <span style={{ fontSize: "13px", color: "#888" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}
