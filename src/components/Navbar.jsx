// src/components/Navbar.jsx

import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>ECG Dashboard</h2>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search Patient ID..."
          className="search-bar"
        />
      </div>

      <div className="navbar-right">
        <button className="nav-btn">🔔</button>
        <button className="nav-btn">👤</button>
      </div>
    </nav>
  );
};

export default Navbar;