"use client";

import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const investmentData = {
    initialValue: 10000,
    creationDate: new Date(2023, 0, 1),
    withdrawals: [
        { month: "Jan", amount: 0 },
        { month: "Feb", amount: 0 },
        { month: "Mar", amount: 2000 },
        { month: "Apr", amount: 0 },
        { month: "May", amount: 0 },
        { month: "Jun", amount: 1500 }
    ]
};

const calculateExpectedBalance = (initialValue, creationDate, withdrawals) => {
    const annualInterestRate = 0.52 / 100;
    const currentDate = new Date();
    let balance = initialValue;

    const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());

    for (let i = 0; i < monthsDiff; i++) {
        balance *= (1 + annualInterestRate);
    }

    withdrawals.forEach((withdrawal) => {
        balance -= withdrawal.amount;
    });

    return balance.toFixed(2);
};

const InvestmentDetails = () => {
    const balance = calculateExpectedBalance(investmentData.initialValue, investmentData.creationDate, investmentData.withdrawals);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                    Detalhes do Investimento
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Valor Inicial</Typography>
                        <Typography variant="body1">{`R$ ${investmentData.initialValue}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Saldo Esperado</Typography>
                        <Typography variant="body1">{`R$ ${balance}`}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>Histórico de Retiradas</Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart 
                                data={investmentData.withdrawals}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default InvestmentDetails;
