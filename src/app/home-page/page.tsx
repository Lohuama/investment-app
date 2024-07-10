// pages/index.js

import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import AreaChartComponent from '../components/AreaChart';
import Navbar from '../components/Navbar';
import BarChartComponent from '../components/BarChart';
import LineChartComponent from '../components/LineChart';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Landing Page - Investimentos</title>
            </Head>
            <Navbar />
            <Container maxWidth="lg" className="py-8">
                <div className="text-center">
                    <Typography variant="h2" className="mb-4">Bem-vindo à </Typography>
                    <Typography variant="h5" className="text-gray-700 mb-8">
                        A melhor plataforma para gerenciar seus investimentos de forma inteligente.
                    </Typography>
                </div>

                <section id="investments" className="bg-gray-100 py-12">
                    <Container maxWidth="xl">
                        <Typography variant="h4" className="text-center mb-6">Investimentos</Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <AreaChartComponent />
                            </div>
                            <div>
                                <Typography variant="body1" className="text-gray-700">
                                    Veja seus investimentos crescerem ao longo do tempo com nossos gráficos detalhados.
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </section>

                <section id="about" className="py-12">
                    <Container maxWidth="xl">
                        <Typography variant="h4" className="text-center mb-6">Sobre Nós</Typography>
                        <Typography variant="body1" className="text-gray-700">
                            ConvertaX é a plataforma líder em gerenciamento de investimentos, oferecendo soluções inovadoras para todos os seus projetos financeiros.
                        </Typography>
                    </Container>
                </section>

                <section id="services" className="bg-gray-100 py-12">
                    <Container maxWidth="xl">
                        <Typography variant="h4" className="text-center mb-6">Nossos Serviços</Typography>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center bg-white p-6 rounded-lg shadow-md">
                                <Typography variant="h5" className="mb-4">Serviço 1</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Descrição do serviço 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <BarChartComponent />
                                </Typography>
                            </div>
                            <div className="text-center bg-white p-6 rounded-lg shadow-md">
                                <Typography variant="h5" className="mb-4">Serviço 2</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Descrição do serviço 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                    <LineChartComponent />
                                </Typography>
                            </div>
                            <div className="text-center bg-white p-6 rounded-lg shadow-md">
                                <Typography variant="h5" className="mb-4">Serviço 3</Typography>
                                <Typography variant="body1" className="text-gray-700">
                                    Descrição do serviço 3. Duis aute irure dolor in reprehenderit in voluptate.
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </section>

                <section id="contact" className="py-12">
                    <Container maxWidth="xl">
                        <Typography variant="h4" className="text-center mb-6">Contato</Typography>
                        <Typography variant="body1" className="text-gray-700">
                            Entre em contato conosco através do e-mail: <a href="mailto:contato@convertax.com" className="text-blue-500">contato@convertax.com</a>
                        </Typography>
                    </Container>
                </section>
            </Container>
        </>
    );
};

export default HomePage;
