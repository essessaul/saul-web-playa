import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../common/ui";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="Playa Escondida Vacation Homes" className="logo-image" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/listings">Vacation Rentals</NavLink>
          <NavLink to="/for-sale">For Sale</NavLink>
          <NavLink to="/owner-services">Owner Services</NavLink>
          <NavLink to="/sales-crm">Sales CRM</NavLink>
          <NavLink to="/owner-dashboard">Owner Dashboard</NavLink>
          <NavLink to="/whatsapp">WhatsApp</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/admin/login"><Button variant="light">Admin Login</Button></Link>
          <Link to="/listings"><Button>Book Now</Button></Link>
        </div>
      </div>
    </header>
  );
}
