'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
    Typography,
    Paper,
    Box,
} from '@mui/material';
import NavBar from '../components/Navbar';

// Carregando dinamicamente o componente de visualização de investimento
const InvestmentViewComponent = dynamic(() => import('../components/InvestmentViewComponent'), {
    loading: () => <Typography>Loading...</Typography>,
});

const InvestmentViewPage = () => {
    const [investmentData, setInvestmentData] = useState(null);

    useEffect(() => {
        // Carregando os dados salvos do Local Storage ao montar a página
        const savedData = localStorage.getItem('investmentData');
        if (savedData) {
            setInvestmentData(JSON.parse(savedData));
        }
    }, []);

    return (
        <>
            <NavBar />
            <Box sx={{ p: 4 }} >
                <Paper sx={{ p: 4 }} style={{background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
                    <Typography variant="h4" gutterBottom>
                        Visualização de Investimento
                    </Typography>
                    {investmentData ? (
                        <InvestmentViewComponent investmentData={investmentData} />
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
