import React from "react";
import { Briefcase } from "lucide-react";
import StatCard from "../components/common/StatCard";
import InvoicePreview from "../components/common/InvoicePreview";
import { Card } from "../components/common/ui";
import { ownerStats } from "../data/mockData";
import logo from "../assets/logo.png";

export default function OwnerServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 760 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Owner Services</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Support, statements, payouts, and owner actions</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>Owner-facing service area with performance visibility and support tools.</p>
        </div>

        <div className="stat-grid" style={{ marginTop: 24 }}>
          {ownerStats.map((item) => <StatCard key={item.label} icon={Briefcase} title={item.label} value={item.value} />)}
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <InvoicePreview />
          <Card>
            <div className="summary-card">
              <h3>Owner actions</h3>
              <div className="grid" style={{ marginTop: 16 }}>
                {["Block owner stay dates","Review reservation history","Download monthly statement","See upcoming guest stays","Request maintenance","View payout history"].map((item) => (
                  <div key={item} className="metric-box" style={{ textAlign: "left" }}>{item}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
