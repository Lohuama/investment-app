import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
        <Legend />
        <Area type="monotone" dataKey="saldoComRetiradas" stroke="#8884d8" fill="#8884d8" name="Saldo Com Retiradas" />
        <Area type="monotone" dataKey="saldoSemRetiradas" stroke="#82ca9d" fill="#82ca9d" name="Saldo Sem Retiradas" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
