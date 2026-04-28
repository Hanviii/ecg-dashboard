// src/components/Sidebar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>

      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patient-monitor">Patient Monitor</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;