import React, { useEffect, useState } from "react";
import ECGGraph from "../components/ECGGraph";

export default function Dashboard() {
  const [heartRate, setHeartRate] = useState(72);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBPM = Math.floor(Math.random() * 50) + 55; 
      setHeartRate(randomBPM);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatus = () => {
    if (heartRate < 60) return "Bradycardia";
    if (heartRate > 100) return "Tachycardia";
    return "Normal";
  };

  const getStatusColor = () => {
    if (heartRate < 60) return "#facc15";
    if (heartRate > 100) return "#ef4444";
    return "#22c55e";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ECG Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: 2,
            background: "#0f172a",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <ECGGraph />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            Heart Rate: {heartRate} BPM
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "24px",
              fontWeight: "bold",
              color: getStatusColor(),
            }}
          >
            Status: {getStatus()}
          </div>
        </div>
      </div>
    </div>
  );
}