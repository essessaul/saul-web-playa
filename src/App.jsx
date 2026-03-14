import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import PropertyPage from "./pages/PropertyPage";
import BookingPage from "./pages/BookingPage";
import SaleListingsPage from "./pages/SaleListingsPage";
import SaleListingDetailPage from "./pages/SaleListingDetailPage";
import OwnerServicesPage from "./pages/OwnerServicesPage";
import SalesCRMPage from "./pages/SalesCRMPage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import WhatsAppAutomationPage from "./pages/WhatsAppAutomationPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <div>
      <Header />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/property/:slug" element={<PropertyPage />} />
          <Route path="/booking/:slug" element={<BookingPage />} />
          <Route path="/for-sale" element={<SaleListingsPage />} />
          <Route path="/for-sale/:slug" element={<SaleListingDetailPage />} />
          <Route path="/owner-services" element={<OwnerServicesPage />} />
          <Route path="/sales-crm" element={<SalesCRMPage />} />
          <Route path="/owner-dashboard" element={<OwnerDashboardPage />} />
          <Route path="/whatsapp" element={<WhatsAppAutomationPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
