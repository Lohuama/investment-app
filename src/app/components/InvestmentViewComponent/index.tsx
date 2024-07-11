import React from 'react';
import {
    Typography,
    Box,
} from '@mui/material';
import AreaChartComponent from '../AreaChart';
import BarChartComponent from '../BarChart';
import LineChartComponent from '../LineChart';
import { InvestmentData } from '../../../utils'; // Importe o tipo InvestmentData aqui

const InvestmentViewComponent = ({ investmentData, investmentData1, investmentData2 }) => {
    // Cálculos de saldo esperado e tributação
    const saldoEsperado = React.useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoMeses = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 30);
        const taxaMensal = 0.52 / 100;
        const saldoEsperado = investmentData.valorInicial * Math.pow(1 + taxaMensal, tempoInvestimentoMeses);
        return saldoEsperado.toFixed(2);
    }, [investmentData]);

    const tributacao = React.useMemo(() => {
        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoAnos = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 365);
        let percentualTributacao = 0;
        if (tempoInvestimentoAnos < 1) {
            percentualTributacao = 22.5;
        } else if (tempoInvestimentoAnos >= 1 && tempoInvestimentoAnos <= 2) {
            percentualTributacao = 18.5;
        } else {
            percentualTributacao = 15;
        }
        return percentualTributacao.toFixed(1);
    }, [investmentData]);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom style={{ marginTop: '50px'}}>
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

            <Box sx={{ mt: 4 }}>
                <GridItem title="Area Chart">
                    <AreaChartComponent />
                </GridItem>
                <GridItem title="Bar chart">
                    <BarChartComponent />
                </GridItem>
                <GridItem title="Line chart">
                    <LineChartComponent />
                </GridItem>
            </Box>
        </Box>
    );
};

function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 rounded-xl h-[400px] mt-40" style={{background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
            <h3 className="text-2x1 font-semibold text-white mb-4 ">{title}</h3>
            {children}
        </div>
    )
}

export default React.memo(InvestmentViewComponent);
