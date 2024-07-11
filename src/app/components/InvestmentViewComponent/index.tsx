import React, { useMemo } from 'react';
import {
    Typography,
    Box,
} from '@mui/material';
import AreaChartComponent from '../AreaChart';
import BarChartComponent from '../BarChart';
import LineChartComponent from '../LineChart';
import GridItem from '../GridItem';

interface InvestmentData {
    proprietario: string;
    dataCriacao: string; 
    valorInicial: number;
    withdrawals: { month: string; amount: number}[];
}

interface InvestmentViewComponentProps {
    investmentData: InvestmentData;
}

const InvestmentViewComponent: React.FC<InvestmentViewComponentProps> = ({ investmentData }) => {
    // Cálculos de saldo esperado e tributação
    const saldoEsperado = useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoMeses = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 30);
        const taxaMensal = 0.52 / 100;

        const saldoEsperado = investmentData.valorInicial * Math.pow(1 + taxaMensal, tempoInvestimentoMeses);

        return saldoEsperado.toFixed(2);
    }, [investmentData]);

    const tributacao = useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoAnos = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 365);
        let percentualTributacao = 0;
        
        // Define a tributação com base no tempo de investimento
        if (tempoInvestimentoAnos < 1) {
            percentualTributacao = 22.5;
        } else if (tempoInvestimentoAnos >= 1 && tempoInvestimentoAnos < 2) {
            percentualTributacao = 18.5;
        } else {
            percentualTributacao = 15;
        }

        return percentualTributacao.toFixed(1);
    }, [investmentData]);

    // Mock de retiradas
    const retiradas = investmentData.withdrawals;

    // Dados do gráfico
    const chartData = useMemo(() => {
        return retiradas.map((retirada, index) => ({
            month: retirada.month,
            saldoEsperado: parseFloat(saldoEsperado),
            retirada: retirada.amount,
            tributacao: parseFloat((parseFloat(saldoEsperado) * (parseFloat(tributacao) / 100)).toFixed(2))
        }));
    }, [retiradas, saldoEsperado, tributacao]);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Detalhes do Investimento
            </Typography>
            <Typography variant="body1" gutterBottom>
                Proprietário: {investmentData.proprietario}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Data de Criação: {new Date(investmentData.dataCriacao).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Valor Inicial: R$ {Number(investmentData.valorInicial).toFixed(2)}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Saldo Esperado: R$ {saldoEsperado}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Tributação: {tributacao}%
            </Typography>

            <Typography variant="body1" gutterBottom>
                Histórico de Retiradas:
            </Typography>
            <ul>
                {retiradas.map((retirada, index) => (
                    <li key={index}>
                        {retirada.month}: R$ {retirada.amount}
                    </li>
                ))}
            </ul>

            <Box sx={{ mt: 4 }}>
                <GridItem title="Area Chart">
                    <AreaChartComponent data={chartData} />
                </GridItem>
            </Box>
        </Box>
    );
};

export default React.memo(InvestmentViewComponent);
