'use client';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Investment 1: 
          <span className="ml-2">${Number(payload[0].value).toFixed(2)}</span>
        </p>
        <p className="text-sm text-blue-400">
          Investment 2: 
          <span className="ml-2">${Number(payload[1].value).toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return null;
};
const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={combinedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="investment1"
          stroke="#2563eb"
          fill="#3b82f6"
          name="Investment 1"
        />
        <Line
          type="monotone"
          dataKey="investment2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          name="Investment 2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;