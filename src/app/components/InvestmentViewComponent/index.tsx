import React from 'react';
import {
    Typography,
    Box,
} from '@mui/material';
import AreaChartComponent from '../AreaChart';
import GridItem from '../GridItem';

const InvestmentViewComponent = () => {
    // Obter os dados do investimento do localStorage
    const investmentData = JSON.parse(localStorage.getItem('investmentData'));

    // Cálculo do saldo esperado com juros compostos de 0,52% ao mês
    const saldoEsperado = React.useMemo(() => {
        if (!investmentData) return 0;

        const dataCriacao = new Date(investmentData.dataCriacao).getTime();
        const hoje = new Date().getTime();
        const tempoInvestimentoMeses = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 30);
        const taxaMensal = 0.52 / 100;

        const saldoEsperado = investmentData.valorInicial * Math.pow(1 + taxaMensal, tempoInvestimentoMeses);

        return saldoEsperado.toFixed(2); // Retornar o saldo esperado com duas casas decimais
    }, [investmentData]);

    if (!investmentData) {
        return (
            <Box sx={{ mt: 4 }}>
                <Typography variant="body1">
                    Dados de investimento não encontrados no localStorage.
                </Typography>
            </Box>
        );
    }

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

            <Box sx={{ mt: 4 }}>
                <GridItem title="Area Chart">
                    <AreaChartComponent saldoInicial={investmentData.valorInicial} saldoEsperado={Number(saldoEsperado)} />
                </GridItem>
            </Box>
        </Box>
    );
};

export default React.memo(InvestmentViewComponent);
