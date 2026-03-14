import React from "react";
import { Card } from "../components/common/ui";
import logo from "../assets/logo.png";

export default function OwnerDashboardPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 860 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Owner Revenue Dashboard</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Monitor revenue, occupancy, and payouts in one place</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>Structured for owners to review performance by unit and by month.</p>
        </div>

        <div className="four-col" style={{ marginTop: 24 }}>
          {[
            ["Gross Revenue", "$42,860"],
            ["Occupancy", "74%"],
            ["Average Daily Rate", "$312"],
            ["Upcoming Payout", "$14,537"],
          ].map(([label, value]) => (
            <Card key={label}><div className="summary-card"><div className="muted">{label}</div><div style={{ fontSize: 30, fontWeight: 700, marginTop: 8 }}>{value}</div></div></Card>
          ))}
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <Card>
            <div className="summary-card">
              <h3>Monthly performance by unit</h3>
              <div className="table-wrap" style={{ marginTop: 16 }}>
                <table className="table">
                  <thead><tr><th>Unit</th><th>Revenue</th><th>Occupancy</th><th>Payout</th></tr></thead>
                  <tbody>
                    <tr><td>Ocean View Condo 101</td><td>$8,420</td><td>78%</td><td>$6,540</td></tr>
                    <tr><td>Beach Tower Suite 204</td><td>$12,880</td><td>72%</td><td>$10,115</td></tr>
                    <tr><td>Marina Penthouse PH-3</td><td>$21,560</td><td>68%</td><td>$14,537</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          <Card>
            <div className="summary-card">
              <h3>Owner insights</h3>
              <div className="grid" style={{ marginTop: 16 }}>
                {[
                  "Highest-performing unit this month: PH-3",
                  "Weekend bookings are outperforming weekdays",
                  "Direct bookings are increasing",
                  "Next payout scheduled for the 5th of the month",
                ].map((item) => <div key={item} className="metric-box" style={{ textAlign: "left" }}>{item}</div>)}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
