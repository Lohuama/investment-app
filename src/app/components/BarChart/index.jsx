import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';


const BarChartComponent = ({ withdrawals }) => {
  // Verifica se withdrawals existe e tem dados antes de mapear
  const data = withdrawals && withdrawals.length > 0 ? withdrawals.map(item => ({
    month: item.month,
    amount: item.amount
  })) : [];

  return (
    <ResponsiveContainer width="100%" height={400}>

      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0,  }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

    </ResponsiveContainer>
  );
};

export default BarChartComponent;
