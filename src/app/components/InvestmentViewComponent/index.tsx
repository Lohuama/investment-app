import React from 'react';
import {
    Typography,
    Box,
} from '@mui/material';
import AreaChartComponent from '../AreaChart';
import BarChartComponent from '../BarChart';
import LineChartComponent from '../LineChart';
import GridItem from '../GridItem';

const InvestmentViewComponent = () => {
    const investmentData = JSON.parse(localStorage.getItem('investmentData'));

    // Cálculos de saldo esperado e tributação
    const saldoEsperado = React.useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoMeses = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 30);
        const taxaMensal = 0.52 / 100;

        // Considera o máximo de 12 meses para o cálculo
        const mesesCalculados = Math.min(tempoInvestimentoMeses, 12);
        const saldoEsperado = investmentData.valorInicial * Math.pow(1 + taxaMensal, mesesCalculados);

        return saldoEsperado.toFixed(2);
    }, [investmentData]);

    const tributacao = React.useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoAnos = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 365);
        let percentualTributacao = 0;
        
        // Define a tributação com base no tempo de investimento
        if (tempoInvestimentoAnos < 1) {
            percentualTributacao = 22.5;
        } else if (tempoInvestimentoAnos >= 1 && tempoInvestimentoAnos <= 2) {
            percentualTributacao = 18.5;
        } else {
            percentualTributacao = 15;
        }

        return percentualTributacao.toFixed(1);
    }, [investmentData]);

    // Mock de retiradas
    const retiradas = [
        { month: "Mar", amount: 2000 },
        { month: "Jun", amount: 1500 }
    ];

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
                    <AreaChartComponent withdrawals={retiradas} />
                </GridItem>
            </Box>
        </Box>
    );
};

export default React.memo(InvestmentViewComponent);
