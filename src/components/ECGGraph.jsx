import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

function generatePoint(t) {
  const cycle = t % 40;

  let value = 0;

  if (cycle < 8) value = 0;        // baseline
  else if (cycle < 10) value = 8;  // P wave
  else if (cycle < 12) value = -10; // Q dip
  else if (cycle < 13) value = 60; // R spike
  else if (cycle < 15) value = -15; // S dip
  else if (cycle < 22) value = 12; // T wave
  else value = 0; // baseline

  return {
    time: t,
    value,
  };
}

export default function ECGGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let t = 0;

    const interval = setInterval(() => {
      setData((prev) => [...prev, generatePoint(t)].slice(-80));
      t++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "220px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={[-20, 70]} hide />
          <Line
            type="linear"
            dataKey="value"
            stroke="#00ff88"
            dot={false}
            strokeWidth={3}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}