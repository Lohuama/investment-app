import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import React from "react";

const AreaChartComponent = ({ withdrawals }) => {
  const data = withdrawals.map(item => ({
    month: item.month,
    amount: item.amount
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart 
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amount" stroke="" fill="#00ed9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
