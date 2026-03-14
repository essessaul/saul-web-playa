import React from "react";
import { Card, Button } from "../components/common/ui";
import logo from "../assets/logo.png";

export default function WhatsAppAutomationPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 860 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>WhatsApp Booking System</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Automate inquiries, booking replies, and follow-ups through WhatsApp</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>Operational blueprint for WhatsApp-based lead capture and booking assistance.</p>
        </div>

        <div className="three-col" style={{ marginTop: 24 }}>
          <Card><div className="summary-card"><h3>Inquiry Automation</h3><p className="muted">Auto-reply with property links, pricing, and availability prompts.</p></div></Card>
          <Card><div className="summary-card"><h3>Booking Follow-Up</h3><p className="muted">Send reminders for payment, check-in, and arrival instructions.</p></div></Card>
          <Card><div className="summary-card"><h3>Sales Qualification</h3><p className="muted">Route buyer leads into the sales CRM with tags and budget notes.</p></div></Card>
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <Card>
            <div className="summary-card">
              <h3>Suggested automations</h3>
              <div className="grid" style={{ marginTop: 16 }}>
                {[
                  "New rental inquiry → send listings link + ask dates",
                  "New sales inquiry → ask budget + purchase timeline",
                  "Confirmed booking → send payment / check-in sequence",
                  "Owner request → route to owner services queue",
                ].map((item) => <div key={item} className="metric-box" style={{ textAlign: "left" }}>{item}</div>)}
              </div>
            </div>
          </Card>
          <Card>
            <div className="summary-card">
              <h3>Next integration step</h3>
              <p className="muted" style={{ lineHeight: 1.7 }}>Connect to the WhatsApp Business API or an approved provider, then tie messages to your CRM, booking records, and owner workflows.</p>
              <Button style={{ marginTop: 16 }}>Prepare WhatsApp Flow</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
