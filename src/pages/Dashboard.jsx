// src/pages/Dashboard.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="dashboard-content">
        <h1>Welcome to ECG Healthcare Dashboard</h1>
        <p>Monitor ECG signals, patient health stats, and healthcare alerts in real time.</p>

        <div className="dashboard-cards">
          <div className="card">Heart Rate: 78 BPM</div>
          <div className="card">Blood Pressure: 120/80</div>
          <div className="card">Status: Stable</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;