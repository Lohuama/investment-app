import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

interface SaldoData {
    month: string;
    saldo: number;
}

const AreaChartComponent = ({ saldoInicial, saldoEsperado }: { saldoInicial: number; saldoEsperado: number }) => {
    const data: SaldoData[] = [];
    const taxaMensal = 0.52 / 100;
    let saldoAtual = saldoInicial;

    for (let i = 0; i < 12; i++) {
        const month = new Date().toLocaleString('default', { month: 'short' });
        data.push({ month, saldo: saldoAtual });

        saldoAtual = saldoAtual * (1 + taxaMensal);
        if (saldoAtual >= saldoEsperado) {
            break; 
        }
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: any) => `R$ ${value.toFixed(2)}`} />
                <Legend />
                <Area type="monotone" dataKey="saldo" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;
