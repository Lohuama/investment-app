'use client';

import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const BarChartComponent = React.memo(({ investmentData }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if(active && payload && payload.length){
      return(
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
            <p className="text-medium text-lg">{label}</p>
            <p className="text-sm text-blue-400">
              Revenue: 
              <span className="ml-2">${payload[0].value}</span>
            </p>
            <p className="text-sm text-blue-400">
              Profit: 
              <span className="ml-2">${payload[1].value}</span>
            </p>
            <p className="text-sm text-blue-400">
              Tax Rate: 
              <span className="ml-2">{investmentData.taxRate}</span>
            </p>
        </div>
      )
    }
  };

  // Verifica se investmentData está definido
  if (!investmentData) {
    return <div>Dados de investimento não disponíveis.</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        width={500} 
        height={400} 
        data={investmentData}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5"/>
        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Bar
          type="monotone"
          dataKey="product1"
          stroke="#00ed9d"
          fill="black"
          stackId="1"
        />

        <Bar
          type="monotone"
          dataKey="product2"
          stroke="#black"
          fill="#00ed9d"
          stackId="1"
        />
      </BarChart>
    </ResponsiveContainer>
  );
});

export default BarChartComponent;
