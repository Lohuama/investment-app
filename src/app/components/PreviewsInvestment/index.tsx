import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import BarChartComponent from '../BarChart';
import { calcularDadosInvestimento } from '../../../utils/calculos';
import mockInvestments, { Investimento } from '../../../utils/mock-onvestment';

const PreviousInvestmentsComponent: React.FC = () => {
  const calcularIdadeEmMeses = (dataCriacao: string): number => {
    const dataCriacaoDate = new Date(dataCriacao);
    const dataAtual = new Date();
    const anos = dataAtual.getFullYear() - dataCriacaoDate.getFullYear();
    const meses = dataAtual.getMonth() - dataCriacaoDate.getMonth();
    return anos * 12 + meses;
  };

  const calcularGanhosCompostos = (valorInicial: number, meses: number, taxaMensal: number): number => {
    return valorInicial * Math.pow(1 + taxaMensal / 100, meses);
  };

  const aplicarImpostoRetiradas = (retiradas: { data: string, valor: number }[], taxaImposto: number): { data: string, valor: number }[] => {
    return retiradas.map(retirada => ({
      data: retirada.data,
      valor: retirada.valor * (1 - taxaImposto / 100)
    }));
  };

  const taxasImposto = [
    { faixa: 'Menos de um ano', taxa: 22.5 },
    { faixa: 'Entre um e dois anos', taxa: 18.5 },
    { faixa: 'Mais de dois anos', taxa: 15 }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Seus Investimentos Anteriores
      </Typography>
      <Grid container spacing={2}>
        {mockInvestments.map((investment: Investimento) => {
          const idadeEmMeses = calcularIdadeEmMeses(investment.dataCriacao);
          const valorComposto = calcularGanhosCompostos(investment.valorInicial, idadeEmMeses, 0.52);
          
          return (
            <Grid item xs={12} md={6} key={investment.id}>
              <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
                <Typography variant="body1" gutterBottom>
                  Proprietário: {investment.proprietario}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Data de Criação: {new Date(investment.dataCriacao).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Valor Inicial: R$ {Number(investment.valorInicial).toFixed(2)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Valor Composto: R$ {Number(valorComposto).toFixed(2)}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Retiradas (após imposto):
                  </Typography>
                  {taxasImposto.map((taxa, index) => {
                    let retiradasComImposto = investment.retiradas;
                    if (taxa.faixa === 'Menos de um ano' && idadeEmMeses >= 12) {
                      retiradasComImposto = aplicarImpostoRetiradas(investment.retiradas, taxa.taxa);
                    } else if (taxa.faixa === 'Entre um e dois anos' && idadeEmMeses >= 12 && idadeEmMeses < 24) {
                      retiradasComImposto = aplicarImpostoRetiradas(investment.retiradas, taxa.taxa);
                    } else if (taxa.faixa === 'Mais de dois anos' && idadeEmMeses >= 24) {
                      retiradasComImposto = aplicarImpostoRetiradas(investment.retiradas, taxa.taxa);
                    }

                    return (
                      <div key={index}>
                        <Typography variant="body2" gutterBottom>
                          {taxa.faixa}:
                        </Typography>
                        {retiradasComImposto.map((retirada, index) => (
                          <Typography key={index} variant="body2" gutterBottom>
                            {new Date(retirada.data).toLocaleDateString()}: R$ {Number(retirada.valor).toFixed(2)}
                          </Typography>
                        ))}
                        <BarChartComponent data={calcularDadosInvestimento(investment.dataCriacao, investment.valorInicial, retiradasComImposto)} />
                      </div>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PreviousInvestmentsComponent;
