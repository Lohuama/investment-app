import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';
import { InvestmentData } from '../utils';

const AreaChartComponent: React.FC<{ data: InvestmentData[] }> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

export default {
  title: 'Components/AreaChartComponent',
  component: AreaChartComponent,
} as Meta;

const Template: StoryFn<{ data: InvestmentData[] }> = (args) => <AreaChartComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 2000 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 1500 },
  ],
}