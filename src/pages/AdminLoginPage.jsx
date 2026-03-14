import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button, Card } from "../components/common/ui";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/logo.png";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("demo@playaescondidavacationhomes.com");

  function handleLogin() {
    signIn(email);
    navigate("/admin");
  }

  return (
    <section className="section">
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "min(460px, 100%)" }}>
          <div className="summary-card">
            <img src={logo} alt="Playa Escondida Vacation Homes" style={{ height: 72, objectFit: "contain", marginBottom: "1rem" }} />
            <div style={{ width: 52, height: 52, borderRadius: 18, background: "#0f172a", color: "#fff", display: "grid", placeItems: "center" }}><Settings size={20} /></div>
            <h1 style={{ marginTop: 18 }}>Admin login</h1>
            <p className="muted">Local auth context placeholder. Replace with Supabase Auth when ready.</p>
            <div className="grid" style={{ marginTop: 18 }}>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input placeholder="Password" type="password" />
            </div>
            <Button style={{ width: "100%", marginTop: 16 }} onClick={handleLogin}>Sign In</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
