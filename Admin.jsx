import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import "./adminNavbar.css";

function ChevronDown({ className }) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconSVG({ children, className }) {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" dangerouslySetInnerHTML={{__html: children}} />
    );
}

function AdminNavbar() {
  const [openOrders, setOpenOrders] = useState(true);
  const [openUsers, setOpenUsers] = useState(true);

  return (
    <>
      <header className="admin-header"></header>
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="sidebar-logo">
            <img src={assets.admin_gamj_logo} alt="admin Logo" className="admin-logo" />
            <div className="sidebar-text">
              <span className="sidebar-title">GAMJ Merchandise</span>
              <span className="sidebar-sublabel">Admin</span>
            </div>
          </div>
          <div className="admin-top-divider1"></div>
          <nav className="sidebar-menu">
            <MenuItem icon={assets.overview_icon} label="Overview" active />
            <MenuItem icon={assets.profile_icon} label="Profile" />
            <MenuItem icon={assets.staff_icon} label="Staff" />
            <MenuItem icon={assets.notification_icon} label="Notifications" />
            <MenuItem icon={assets.gamj_shop_icon} label="GAMJ Shop" />
            <MenuItem icon={assets.products_icon} label="Products" />
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="admin-main">
          <div className="admin-top-row">
            <span className="overview-title-mint">Overview</span>
            <div className="top-row-icons">
              <img src={assets.notification_icon} alt="Notifications" className="top-row-icon" />
              <img src={assets.logout_icon} alt="Logout" className="top-row-icon" />
            </div>
          </div>
          <div className="admin-top-divider"></div>
          <main className="admin-content">
            {/* Orders Section */}
            <section className="metrics-section">
              <div className="metrics-header" onClick={() => setOpenOrders(s => !s)}>
                <h3>Orders</h3>
                <ChevronDown className={`chev ${openOrders ? "open" : ""}`} />
              </div>

              {openOrders && (
                <>
                  <div className="metrics-grid">
                    <MetricCard
                      left={<span className="circle orange" />}
                      title="Pending Orders"
                      number="5"
                      subtext="Updated: Sep 25, 2025"
                    />
                    <MetricCard left={<span className="circle teal" />} title="Processing Orders" number="10" />
                    <MetricCard left={<span className="circle blue" />} title="Out for Delivery" number="4" />
                    <MetricCard left={<span className="circle green" />} title="Delivered Orders" number="48" />
                  </div>

                  <div className="metrics-grid">
                    <MetricCard
                      left={
                        <IconSVG>
                          {"<path d='M3 7h18M8 7v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>"}
                        </IconSVG>
                      }
                      title="All Orders"
                      number="67"
                    />
                    <MetricCard
                      left={
                        <IconSVG>
                          {"<path d='M3 6h2l.4 2M7 6h11l-1.2 6.4A2 2 0 0 1 14.9 15H8.1a2 2 0 0 1-1.9-1.6L4 4' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M16 9l4-4' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>"}
                        </IconSVG>
                      }
                      title="Order Cancellation"
                      number="2"
                    />
                    <MetricCard
                      left={
                        <IconSVG>
                          {"<path d='M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M12 11v6' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M9 8l3 3 3-3' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>"}
                        </IconSVG>
                      }
                      title="Return and Refund"
                      number="2"
                    />
                    <MetricCard
                      left={
                        <IconSVG>
                          {"<path d='M12 21s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z' stroke='currentColor' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/> <circle cx='12' cy='10' r='2' fill='currentColor'/>"}
                        </IconSVG>
                      }
                      title="Delivery Locations"
                      number="2"
                    />
                  </div>
                </>
              )}
            </section>

            {/* Users Section */}
            <section className="metrics-section">
              <div className="metrics-header" onClick={() => setOpenUsers(s => !s)}>
                <h3>Users</h3>
                <ChevronDown className={`chev ${openUsers ? "open" : ""}`} />
              </div>

              {openUsers && (
                <>
                  <div className="metrics-grid">
                    <MetricCard left={<span className="icon-green">👤</span>} title="Verified Customers" number="1" />
                    <MetricCard left={<span className="icon-red">👤</span>} title="Unverified Customers" number="2" />
                    <MetricCard left={<span className="icon-green">🏷️</span>} title="Verified Staff" number="2" />
                    <MetricCard left={<span className="icon-red">🏷️</span>} title="Unverified Staff" number="2" />
                  </div>

                  <div className="metrics-grid">
                    <MetricCard left={<span className="icon-green">🛡️</span>} title="Verified Admin" number="1" />
                    <MetricCard left={<span className="icon-red">🛡️</span>} title="Unverified Admin" number="2" />
                    <MetricCard left={<span className="icon-default">👥</span>} title="All Users" number="67" />
                    <div className="metric-card empty-card" />
                  </div>
                </>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <div className={`sidebar-menu-item${active ? " active" : ""}`}>
      <img src={icon} alt={label} className="menu-icon" />
      <span>{label}</span>
    </div>
  );
}

function MetricCard({ left, title, number, subtext }) {
  return (
    <div className="metric-card">
      <div className="metric-left">{left}</div>
      <div className="metric-body">
        <div className="metric-title">{title}</div>
        <div className="metric-number">{number}</div>
        {subtext && <div className="metric-subtext">{subtext}</div>}
      </div>
    </div>
  );
}

export default AdminNavbar;
