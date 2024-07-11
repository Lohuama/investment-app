'use client';

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
import { investmentData } from "../../../utils";



// Função para calcular o saldo esperado com ganhos compostos
const calculateExpectedBalance = (initialValue: number, creationDate: Date, withdrawals: { month: string; amount: number}[]) => {
  const annualInterestRate = 0.52 / 100; // Taxa de juros anual (0.52% por mês)
  const currentDate = new Date();
  let balance = initialValue;

  // Diferença em meses desde a criação
  const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());

  // Aplicar ganhos
  for (let i = 0; i < monthsDiff; i++) {
    balance *= (1 + annualInterestRate);
  }

  // Deduzir retiradas
  withdrawals.forEach((withdrawal) => {
    balance -= withdrawal.amount;
  });

  return balance.toFixed(2);
};

// Função para calcular o imposto sobre as retiradas
const calculateTax = (creationDate: Date, withdrawalDate: Date) => {
  const ageInMonths = (withdrawalDate.getFullYear() - creationDate.getFullYear()) * 12 + (withdrawalDate.getMonth() - creationDate.getMonth());

  if (ageInMonths < 12) {
    return 0.225; // Menos de um ano: 22,5%.
  } else if (ageInMonths >= 12 && ageInMonths < 24) {
    return 0.185; // Entre um e dois anos: 18,5%.
  } else {
    return 0.15; // Mais de dois anos: 15%.
  }
};

const AreaChartComponent = () => {
  const data = investmentData.withdrawals.map(item => ({
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
