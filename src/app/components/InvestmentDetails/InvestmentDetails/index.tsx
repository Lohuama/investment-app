import React from "react";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", saldo: 4000 },
  { name: "Feb", saldo: 3000 },
  { name: "Mar", saldo: 2000 },
  { name: "Apr", saldo: 2780 },
  { name: "May", saldo: 1890 },
  { name: "Jun", saldo: 2390 },
  { name: "Jul", saldo: 3490 },
];

const InvestmentDetails = () => {
  const valorInicial = 10000;
  const saldoEsperado = 15000;
  const historicoDeRetiradas = [
    { data: "01/01/2023", valor: 500 },
    { data: "01/02/2023", valor: 700 },
    { data: "01/03/2023", valor: 400 },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Investimento
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Valor Inicial:</Typography>
            <Typography variant="body1">
              R$ {valorInicial.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Saldo Esperado:</Typography>
            <Typography variant="body1">
              R$ {saldoEsperado.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Histórico de Retiradas:</Typography>
            <ul>
              {historicoDeRetiradas.map((retirada, index) => (
                <li key={index}>
                  {retirada.data}: R$ {retirada.valor.toFixed(2)}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Projeção de Saldo:</Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InvestmentDetails;
