import React from "react";
import { salesLeads } from "../data/mockData";
import { Card, Button, Badge } from "../components/common/ui";
import logo from "../assets/logo.png";

export default function SalesCRMPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 860 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Sales CRM</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Track buyers, follow-ups, and deal pipeline</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>Real estate sales leads, purchase opportunities, site visits, and conversion tracking.</p>
        </div>

        <div className="four-col" style={{ marginTop: 24 }}>
          {["New Leads", "Follow Ups", "Visits Scheduled", "Closed Deals"].map((label, i) => (
            <Card key={label}><div className="summary-card"><div className="muted">{label}</div><div style={{ fontSize: 30, fontWeight: 700, marginTop: 8 }}>{[14,8,5,2][i]}</div></div></Card>
          ))}
        </div>

        <Card style={{ marginTop: 24 }}>
          <div className="summary-card">
            <div className="price-row"><h3 style={{ margin: 0 }}>Lead pipeline</h3><Button>Add New Buyer Lead</Button></div>
            <div className="table-wrap" style={{ marginTop: 16 }}>
              <table className="table">
                <thead><tr><th>Name</th><th>Interest</th><th>Source</th><th>Budget</th><th>Status</th></tr></thead>
                <tbody>
                  {salesLeads.map((lead) => (
                    <tr key={lead.name}>
                      <td>{lead.name}</td><td>{lead.interest}</td><td>{lead.source}</td><td>{lead.budget}</td><td><Badge variant="outline">{lead.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
