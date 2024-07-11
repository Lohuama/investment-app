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

// Função para calcular o saldo esperado com ganhos compostos
const calculateExpectedBalance = (initialValue, creationDate, withdrawals) => {
  const monthlyInterestRate = 0.52 / 100; // Taxa de juros mensal (0.52%)
  const currentDate = new Date();
  let balance = initialValue;

  // Diferença em meses desde a criação
  const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());

  // Aplicar ganhos mensais compostos
  for (let i = 0; i < monthsDiff; i++) {
    balance *= (1 + monthlyInterestRate);
  }

  // Deduzir retiradas
  withdrawals.forEach((withdrawal) => {
    balance -= withdrawal.amount;
  });

  return balance.toFixed(2);
};

// Função para calcular o imposto sobre as retiradas
const calculateTax = (creationDate, withdrawalDate) => {
  const ageInMonths = (withdrawalDate.getFullYear() - creationDate.getFullYear()) * 12 + (withdrawalDate.getMonth() - creationDate.getMonth());

  if (ageInMonths < 12) {
    return 22.5; // Menos de um ano: 22,5%
  } else if (ageInMonths >= 12 && ageInMonths < 24) {
    return 18.5; // Entre um e dois anos: 18,5%
  } else {
    return 15; // Mais de dois anos: 15%
  }
};

// Dados de investimento
const investmentData1 = {
  initialValue: 10000,
  creationDate: new Date(2023, 0, 1), // 1 de Janeiro de 2023
  withdrawals: [
    { month: "Jan", amount: 0, date: new Date(2023, 0, 31) }, 
    { month: "Feb", amount: 0, date: new Date(2023, 1, 28) }, 
    { month: "Mar", amount: 2000, date: new Date(2023, 2, 31) }, 
    { month: "Apr", amount: 0, date: new Date(2023, 3, 30) }, 
    { month: "May", amount: 0, date: new Date(2023, 4, 31) }, 
    { month: "Jun", amount: 1500, date: new Date(2023, 5, 30) }
  ]
};

const investmentData2 = {
  initialValue: 8000,
  creationDate: new Date(2019, 0, 1), // 1 de Janeiro de 2019
  withdrawals: [
    { month: "Jan", amount: 0, date: new Date(2019, 0, 31) }, 
    { month: "Feb", amount: 0, date: new Date(2019, 1, 28) }, 
    { month: "Mar", amount: 3000, date: new Date(2019, 2, 31) }, 
    { month: "Apr", amount: 0, date: new Date(2019, 3, 30) }, 
    { month: "May", amount: 0, date: new Date(2019, 4, 31) }, 
    { month: "Jun", amount: 2500, date: new Date(2019, 5, 30) }
  ]
};

const calculateInvestmentData = (investmentData) => {
  const { initialValue, creationDate, withdrawals } = investmentData;
  const monthlyInterestRate = 0.52 / 100; // Taxa de juros mensal (0.52%)
  const balanceData = [];

  let balance = initialValue;

  withdrawals.forEach((withdrawal, index) => {
    if (index > 0) {
      const previousDate = withdrawals[index - 1].date;
      const currentDate = withdrawal.date;

      const monthsDiff = (currentDate.getFullYear() - previousDate.getFullYear()) * 12 + (currentDate.getMonth() - previousDate.getMonth());

      // Aplicar ganhos mensais compostos
      for (let i = 0; i < monthsDiff; i++) {
        balance *= (1 + monthlyInterestRate);
      }
    }
    balance -= withdrawal.amount;
    balanceData.push({ month: withdrawal.month, amount: balance.toFixed(2) });
  });

  return balanceData;
};

const investmentChartData1 = calculateInvestmentData(investmentData1).map(data => ({ ...data, investment1: parseFloat(data.amount) }));
const investmentChartData2 = calculateInvestmentData(investmentData2).map(data => ({ ...data, investment2: parseFloat(data.amount) }));

// Adicionando mais dados para que as linhas se cruzem em algum ponto
const combinedData = investmentChartData1.map((data, index) => ({
  name: data.month,
  investment1: data.investment1,
  investment2: investmentChartData2[index] ? investmentChartData2[index].investment2 + (index * 2000) : 0 // Ajuste para criar um cruzamento
}));

// Tooltip personalizado
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Investment 1: 
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-blue-400">
          Investment 2: 
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

// Componente de gráfico de linha
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
