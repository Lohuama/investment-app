// src/stories/BarChartComponent.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ResponsiveContainer } from 'recharts';
import BarChartComponent from '../../app/components/BarChart';
import { InvestmentData } from '../../utils';

// Dados de exemplo para o gráfico de barras de investimento
const initialInvestmentData: InvestmentData[] = [
  { month: "Jan", amount: 4000 },
  { month: "Feb", amount: 3000 },
  { month: "Mar", amount: 2000 },
  { month: "Apr", amount: 2780 },
  { month: "May", amount: 1890 },
  { month: "Jun", amount: 2390 },
];

// Meta informações para o Storybook
export default {
  title: 'Components/BarChartComponent',
  component: BarChartComponent,
} as Meta;

// Template para o componente interativo
const Template: StoryFn<{ data: InvestmentData[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChartComponent  />
  </ResponsiveContainer>
);

// Story para o componente interativo com controles
export const InteractiveBarChart = Template.bind({});
InteractiveBarChart.args = {
  data: initialInvestmentData,
};

// Controles (args) para o Storybook
InteractiveBarChart.argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};
