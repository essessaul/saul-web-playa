import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Card } from "../components/common/ui";
import PropertyAvailabilityCalendar from "../components/listings/PropertyAvailabilityCalendar";
import { getSaleBySlug } from "../services/propertyService";
import logo from "../assets/logo.png";

export default function SaleListingDetailPage() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getSaleBySlug(slug).then(setProperty);
  }, [slug]);

  if (!property) return <section className="section"><div className="container">Loading property...</div></section>;

  return (
    <section className="section">
      <div className="container">
        <Link to="/for-sale" className="muted">← Back to For Sale</Link>
        <div className="brand-banner" style={{ marginTop: "1rem" }}><img src={logo} alt="Playa Escondida Vacation Homes" /></div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <Card>
            <div className="property-card">
              <img src={property.image} alt={property.name} style={{ height: 360 }} />
              <div className="meta-row" style={{ marginTop: 16 }}>
                <Badge>{property.category}</Badge>
                <Badge variant="outline">For Sale</Badge>
              </div>
              <h1 style={{ marginTop: 16 }}>{property.name}</h1>
              <div className="muted">{property.location}</div>
              <p className="muted" style={{ lineHeight: 1.7 }}>{property.description}</p>
              <p style={{ lineHeight: 1.7 }}>{property.details}</p>
              <div className="price-row" style={{ marginTop: 20 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 700 }}>{property.price}</div>
                  <div className="muted" style={{ fontSize: 12 }}>asking price</div>
                </div>
                <Button>Request Sales Info</Button>
              </div>
              <PropertyAvailabilityCalendar title="Sales Availability / Scheduling Calendar" />
            </div>
          </Card>

          <Card>
            <div className="summary-card">
              <h3>Request more details</h3>
              <p className="muted">Use this area for buyer inquiries, site visits, and sales follow-up.</p>
              <div className="grid" style={{ marginTop: 20 }}>
                <input placeholder="Full name" />
                <input placeholder="Email" />
                <input placeholder="Phone" />
                <textarea placeholder="Tell us what unit, budget, or visit date you want." />
              </div>
              <Button style={{ width: "100%", marginTop: 16 }}>Send Inquiry</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
