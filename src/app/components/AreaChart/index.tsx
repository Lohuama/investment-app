import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const AreaChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="saldoEsperado" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="retirada" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="tributacao" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
