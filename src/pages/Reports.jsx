// src/pages/Reports.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Reports = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: "260px", marginTop: "90px", padding: "30px" }}>
        <h1>Reports</h1>
        <p>Patient ECG reports, analytics, and downloadable summaries will appear here.</p>
      </main>
    </div>
  );
};

export default Reports;