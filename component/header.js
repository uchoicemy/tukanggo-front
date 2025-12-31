// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
      <header id="header" className="fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">TUKANGGO.MY</h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a href="services">Find Services</a></li>
              <li><a href="booking-status">Booking Status</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
  );
}
