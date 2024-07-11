'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';
import NavBar from '../components/Navbar';

// Importe os componentes dinamicamente
const AreaChartComponent = dynamic(() => import('../components/AreaChart'));
const BarChartComponent = dynamic(() => import('../components/BarChart'));
const LineChartComponent = dynamic(() => import('../components/LineChart'));
const GridItem = dynamic(() => import('../components/GridItem'));

export default function Home() {
  const [investimento, setInvestimento] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn');
        }
      });
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleCreateInvestment = (newInvestimento) => {
    setInvestimento(newInvestimento);
  };

  return (
    <main className="relative poppins md:px-[9rem]">
      <NavBar />
      <div className="px-4 flex flex-col gap-[7.69rem]">
        {/* Hero Section */}
        <section className="section relative mt-[4rem] text-center opacity-0">
          <Typography
            variant="h1"
            className="volkhov font-bold text-[3rem] md:text-[4.73756rem] leading-large text-lightBlack"
          >
            Bem-vindo à ConvertaX
          </Typography>
          <Typography
            variant="body1"
            className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]"
          >
            A melhor plataforma para gerenciar seus investimentos de forma
            inteligente.
          </Typography>
          <a href="/create-investiment">
            <Button
              variant="contained"
              className="mt-[2rem] animate-bounce"
              style={{ backgroundColor: '#13da87', color: 'black' }}
            >
              Comece Agora
            </Button>
          </a>
        </section>

        {/* Chart Section */}
        <section className="section relative mt-[4rem] opacity-0">
          <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
            <Typography
              variant="body1"
              className="my-[1.6rem] leading-[1.692rem] text-lightGray text-[1rem]"
            >
              Seguraca e transparência.
            </Typography>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
              <GridItem title="Area Chart">
                <AreaChartComponent />
              </GridItem>
              <GridItem title="Bar chart">
                <BarChartComponent />
              </GridItem>
              <GridItem title="Line chart">
                <LineChartComponent />
              </GridItem>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section relative mt-[4rem] text-center opacity-0">
          <Typography
            variant="h2"
            className="volkhov font-bold text-[2rem] md:text-[3rem] leading-large text-lightBlack"
          >
            Nossos Recursos
          </Typography>
          <Typography
            variant="body1"
            className="my-[1.6rem] leading-[1.692rem] text-lightGray text-[1rem]"
          >
            Descubra as funcionalidades incríveis que oferecemos para você
            gerenciar seus investimentos com eficiência.
          </Typography>
          <div className="flex flex-wrap justify-center gap-8 mt-[2rem]">
            <div className="feature-card bg-white shadow-md p-4 rounded-lg w-[300px]">
              <img src="/images/convertx.jpeg" alt="Feature 1" />
              <Typography
                variant="h6"
                className="font-bold text-[1.5rem] text-lightBlack mt-4"
              >
                Gerenciamento Avançado
              </Typography>
              <Typography variant="body2" className="mt-2 text-lightGray">
                Ferramentas de gerenciamento avançadas para acompanhar seus
                investimentos.
              </Typography>
            </div>
            <div className="feature-card bg-white shadow-md p-4 rounded-lg w-[300px]">
              <img src="/images/convertx.jpeg" alt="Feature 2" />
              <Typography
                variant="h6"
                className="font-bold text-[1.5rem] text-lightBlack mt-4"
              >
                Análises Detalhadas
              </Typography>
              <Typography variant="body2" className="mt-2 text-lightGray">
                Análises detalhadas para você tomar as melhores decisões.
              </Typography>
            </div>
            <div className="feature-card bg-white shadow-md p-4 rounded-lg w-[300px]">
              <img src="/images/convertx.jpeg" alt="Feature 3" />
              <Typography
                variant="h6"
                className="font-bold text-[1.5rem] text-lightBlack mt-4"
              >
                Segurança Garantida
              </Typography>
              <Typography variant="body2" className="mt-2 text-lightGray">
                Sua segurança é nossa prioridade. Proteção total para seus
                dados.
              </Typography>
            </div>
          </div>
        </section>

        {/* Investment Details Section */}
        {investimento && (
          <section className="section relative mt-[4rem] opacity-0">
            <Paper elevation={4} sx={{ padding: 4 }}>
              <Typography
                variant="h2"
                className="volkhov font-bold text-[2rem] md:text-[3rem] leading-large text-lightBlack mb-4 text-center"
              >
                Detalhes do Investimento
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="body1"
                    className="font-bold text-lightGray"
                  >
                    Proprietário: {investimento.proprietario}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="body1"
                    className="font-bold text-lightGray"
                  >
                    Data de Criação: {investimento.dataCriacao}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="body1"
                    className="font-bold text-lightGray"
                  >
                    Valor Inicial: {investimento.valorInicial}
                  </Typography>
                </Grid>
                {/* Aqui você pode adicionar mais informações conforme necessário */}
              </Grid>
            </Paper>
          </section>
        )}

        {/* Contact Section */}
        <section className="section relative mt-[4rem] text-center opacity-0">
          <Typography
            variant="h2"
            className="volkhov font-bold text-[2rem] md:text-[3rem] leading-large text-lightBlack"
          >
            Contato
          </Typography>
          <Typography
            variant="body1"
            className="my-[1.6rem] leading-[1.692rem] text-lightGray text-[1rem]"
          >
            Fale conosco para saber mais sobre como podemos ajudar você a
            alcançar seus objetivos financeiros.
          </Typography>
          <div className="flex justify-center mt-[2rem]"></div>
        </section>
      </div>
    </main>
  );
}
