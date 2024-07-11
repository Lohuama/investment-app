// src/stories/LineChartComponent.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ResponsiveContainer } from 'recharts';
import LineChartComponent from '../../app/components/LineChart';
import { InvestmentData } from '../../utils';

const initialInvestmentData1 = {
  initialValue: 10000,
  creationDate: new Date(2023, 0, 1), 
  withdrawals: [
    { month: "Jan", amount: 0, date: new Date(2023, 0, 31) },
    { month: "Feb", amount: 0, date: new Date(2023, 1, 28) },
    { month: "Mar", amount: 2000, date: new Date(2023, 2, 31) },
    { month: "Apr", amount: 0, date: new Date(2023, 3, 30) },
    { month: "May", amount: 0, date: new Date(2023, 4, 31) },
    { month: "Jun", amount: 1500, date: new Date(2023, 5, 30) }
  ]
};

const initialInvestmentData2 = {
  initialValue: 8000,
  creationDate: new Date(2019, 0, 1), 
  withdrawals: [
    { month: "Jan", amount: 0, date: new Date(2019, 0, 31) },
    { month: "Feb", amount: 0, date: new Date(2019, 1, 28) },
    { month: "Mar", amount: 3000, date: new Date(2019, 2, 31) },
    { month: "Apr", amount: 0, date: new Date(2019, 3, 30) },
    { month: "May", amount: 0, date: new Date(2019, 4, 31) },
    { month: "Jun", amount: 2500, date: new Date(2019, 5, 30) }
  ]
};

export default {
  title: 'Components/LineChartComponent',
  component: LineChartComponent,
} as Meta;

const Template: StoryFn<{ data1: InvestmentData[], data2: InvestmentData[] }> = ({ data1, data2 }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChartComponent  />
  </ResponsiveContainer>
);

export const InteractiveLineChart = Template.bind({});
InteractiveLineChart.args = {
  data1: initialInvestmentData1,
  data2: initialInvestmentData2,
};

InteractiveLineChart.argTypes = {
  data1: {
    control: {
      type: 'object',
    },
  },
  data2: {
    control: {
      type: 'object',
    },
  },
};
