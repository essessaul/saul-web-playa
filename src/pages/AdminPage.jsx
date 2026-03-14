import React, { useEffect, useState } from "react";
import { Calendar, ClipboardList, DollarSign, LineChart } from "lucide-react";
import StatCard from "../components/common/StatCard";
import InvoicePreview from "../components/common/InvoicePreview";
import { Badge, Card } from "../components/common/ui";
import { reservations } from "../data/mockData";
import { getAvailabilityCalendar } from "../services/calendarService";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/logo.png";

export default function AdminPage() {
  const { session } = useAuth();
  const [tab, setTab] = useState("reservations");
  const [calendar, setCalendar] = useState([]);
  const tabs = ["reservations", "calendar", "pricing", "reports", "operations"];

  useEffect(() => {
    getAvailabilityCalendar().then(setCalendar);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 820 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>Admin Dashboard</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Control the rental operation from one place</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            Signed in as {session?.email || "guest"}. This page is ready to connect to Supabase data and protected routes.
          </p>
        </div>

        <div className="stat-grid" style={{ marginTop: 24 }}>
          <StatCard icon={Calendar} title="Upcoming Arrivals" value="14" />
          <StatCard icon={DollarSign} title="Pending Payments" value="$6,240" />
          <StatCard icon={LineChart} title="ADR" value="$312" />
          <StatCard icon={ClipboardList} title="Open Tasks" value="8" />
        </div>

        <div className="admin-tabs">
          {tabs.map((item) => (
            <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>
          ))}
        </div>

        {tab === "reservations" && (
          <Card>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Guest</th><th>Property</th><th>Dates</th><th>Source</th><th>Total</th><th>Status</th></tr></thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr key={r.guest}>
                      <td>{r.guest}</td><td>{r.property}</td><td>{r.dates}</td><td>{r.source}</td><td>{r.total}</td><td><Badge variant="outline">{r.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {tab === "calendar" && (
          <Card><div className="summary-card"><div className="calendar-grid">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => <div key={d} className="calendar-header">{d}</div>)}{calendar.map((item) => <div key={item.day} className={`calendar-day ${item.status}`}>{item.day}</div>)}</div></div></Card>
        )}

        {tab === "pricing" && (
          <div className="four-col">{["Base Rate","Weekend Uplift","Holiday Uplift","Weekly Discount"].map((label, index) => <Card key={label}><div className="summary-card"><div className="muted">{label}</div><div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>{["$275","+18%","+30%","-10%"][index]}</div></div></Card>)}</div>
        )}

        {tab === "reports" && (
          <div className="two-col">
            <InvoicePreview />
            <Card><div className="summary-card"><h3>Report modules</h3><div className="grid" style={{ marginTop: "1rem" }}>{["Revenue by Property","Occupancy","Booking Source Mix","Owner Statements","Tax summary","Payout schedule"].map((label) => <div key={label} className="metric-box" style={{ textAlign: "left" }}>{label}</div>)}</div></div></Card>
          </div>
        )}

        {tab === "operations" && (
          <div className="three-col">{["Housekeeping assignments","Maintenance tickets","Arrival and departure workflow"].map((label) => <Card key={label}><div className="summary-card"><h3>{label}</h3><p className="muted">Operational module prepared for the next build phase.</p></div></Card>)}</div>
        )}
      </div>
    </section>
  );
}
