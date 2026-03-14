import React from "react";
import { Card } from "./ui";

export default function StatCard({ icon: Icon, title, value, note }) {
  return (
    <Card>
      <div className="stat-card">
        <div className="price-row">
          <div>
            <div className="muted" style={{ fontSize: 14 }}>{title}</div>
            <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>{value}</div>
            {note ? <div className="muted" style={{ fontSize: 14, marginTop: 6 }}>{note}</div> : null}
          </div>
          <div style={{ width: 48, height: 48, borderRadius: 18, background: "#0f172a", color: "#fff", display: "grid", placeItems: "center" }}>
            <Icon size={20} />
          </div>
        </div>
      </div>
    </Card>
  );
}
