import React, { useEffect, useState } from "react";
import PropertyCard from "../components/listings/PropertyCard";
import { getSaleListings } from "../services/propertyService";
import logo from "../assets/logo.png";

export default function SaleListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getSaleListings().then(setListings);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="brand-banner"><img src={logo} alt="Playa Escondida Vacation Homes" /></div>
        <div style={{ maxWidth: 840 }}>
          <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>For Sale</div>
          <h1 className="page-title" style={{ color: "#0f172a" }}>Property listings for sale</h1>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            Every card, image, title, and listing element opens the dedicated detail page for more information.
          </p>
        </div>

        <div className="module-grid" style={{ marginTop: 24 }}>
          {listings.map((item) => <PropertyCard key={item.id} property={item} mode="sale" />)}
        </div>
      </div>
    </section>
  );
}
