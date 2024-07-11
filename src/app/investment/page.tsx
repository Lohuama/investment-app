'use client';

import { useEffect, useState } from 'react';
import {
    Typography,
    Paper,
    Box,
} from '@mui/material';
import NavBar from '../components/Navbar';
import InvestmentViewComponent from '../components/InvestmentViewComponent';

interface InvestmentData {
    proprietario: string;
    dataCriacao: string; 
    valorInicial: number;
    withdrawals: { month: string; amount: number}[];
}

const InvestmentViewPage = () => {
    const [investmentData, setInvestmentData] = useState<InvestmentData | null>(null);

    useEffect(() => {
        // Verifica se há dados salvos no Local Storage ao montar a página
        const savedData = localStorage.getItem('investmentData');
        if (savedData) {
            setInvestmentData(JSON.parse(savedData));
        }
    }, []);

    return (
        <>
            <NavBar />
            <Box sx={{ p: 4 }} >
                <Paper sx={{ p: 4 }} style={{ background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
                    <Typography variant="h4" gutterBottom>
                        Visualização de Investimento
                    </Typography>
                    {investmentData ? (
                        <>
                            <InvestmentViewComponent investmentData={investmentData} />
                        </>
                    ) : (
                        <Typography variant="body1">
                            Nenhum investimento encontrado.
                        </Typography>
                    )}
                </Paper>
            </Box>
        </>
    );
};

export default InvestmentViewPage;
