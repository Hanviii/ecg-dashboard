// src/pages/PatientMonitor.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PatientMonitor = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: "260px", marginTop: "90px", padding: "30px" }}>
        <h1>Patient Monitor</h1>
        <p>Live patient ECG monitoring and detailed health stats will appear here.</p>
      </main>
    </div>
  );
};

export default PatientMonitor;