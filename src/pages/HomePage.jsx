import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, ClipboardList, CreditCard, Globe, Home, Link2, Search, Settings, ShieldCheck, UserCircle2 } from "lucide-react";
import { Badge, Button, Card } from "../components/common/ui";
import StatCard from "../components/common/StatCard";
import logo from "../assets/logo.png";

export default function HomePage() {
  const sections = [
    ["Vacation Rentals", "/listings", "Browse short-stay inventory, direct bookings, and guest-ready property pages."],
    ["For Sale", "/for-sale", "Show ownership opportunities, asking prices, and real-estate inquiries."],
    ["Owner Services", "/owner-services", "Present owner reporting, statements, payouts, and support tools."],
  ];

  const modules = [
    [Search, "Listings Page", "Search and filter inventory with hospitality-style presentation.", "/listings"],
    [CreditCard, "Booking + Payment", "Booking draft creation with Stripe checkout service scaffold.", "/listings"],
    [Settings, "Admin Dashboard", "Manage reservations, availability, pricing, and reporting.", "/admin"],
    [UserCircle2, "Owner Services", "Show owners occupancy, revenue, and payout visibility.", "/owner-services"],
    [Link2, "Sales CRM", "Track buyer leads, budgets, site visits, and sales follow-up.", "/sales-crm"],
    [ClipboardList, "WhatsApp System", "Automate inquiries, follow-ups, and booking messaging.", "/whatsapp"]
  ];

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
            <Badge>Vacation Rentals • For Sale • Owner Services</Badge>
            <h1 className="page-title">Clean production version for Playa Escondida Vacation Homes.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.8, maxWidth: 760 }}>
              Better structure, cleaner routing, separate business lines, clickable listings, calendars on detail pages, CRM, owner dashboard, and WhatsApp flow planning.
            </p>
            <div className="header-actions" style={{ marginTop: 24 }}>
              <Link to="/listings"><Button variant="light">Explore Listings</Button></Link>
              <Link to="/for-sale"><Button>See Properties For Sale</Button></Link>
            </div>
          </motion.div>

          <Card>
            <div className="module-card">
              <div className="muted">Main Sections</div>
              <h3>Organized by business line</h3>
              <div className="grid" style={{ marginTop: 20 }}>
                {sections.map(([title, link, text]) => (
                  <Card key={title}>
                    <div className="summary-card">
                      <h3>{title}</h3>
                      <p className="muted" style={{ lineHeight: 1.6 }}>{text}</p>
                      <Link to={link}><Button variant="light">Open Section</Button></Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          <StatCard icon={Home} title="Inventory" value="25+" note="Scalable to 100+" />
          <StatCard icon={BarChart3} title="Average Nightly Rate" value="$312" note="Portfolio level" />
          <StatCard icon={ShieldCheck} title="Occupancy" value="74%" note="Rolling 30 days" />
          <StatCard icon={Globe} title="Backend Status" value="Ready" note="Supabase + Stripe scaffold" />
        </div>
      </section>

      <section className="section">
        <div className="container module-grid">
          {modules.map(([Icon, title, text, link]) => (
            <Card key={title}>
              <div className="module-card">
                <div style={{ width: 48, height: 48, borderRadius: 18, background: "#0f172a", color: "#fff", display: "grid", placeItems: "center" }}><Icon size={20} /></div>
                <h3 style={{ marginTop: 20 }}>{title}</h3>
                <p className="muted" style={{ lineHeight: 1.6 }}>{text}</p>
                <Link to={link}><Button variant="light">Open</Button></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
