'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    TextField,
    Button,
    Container,
    Typography,
    Grid,
    Paper,
    Box,
} from '@mui/material';
import NavBar from '../Navbar';

const CreateInvestmentComponent = () => {
    const router = useRouter();

    const [formState, setFormState] = useState({
        proprietario: '',
        dataCriacao: new Date().toISOString().split('T')[0],
        valorInicial: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormState(prevState => ({
            ...prevState,
            dataCriacao: date || new Date().toISOString().split('T')[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (parseFloat(formState.valorInicial) < 0) {
            alert('O valor inicial não pode ser negativo.');
            return;
        }

        setIsSubmitting(true);

        try {
            console.log('Formulário enviado:', formState);

            router.push('/investment');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao criar o investimento. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slideIn');
                }
            });
        });

        const elements = document.querySelectorAll('.observed');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <>
        <NavBar /> 
        <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'stretch' }}>
                <Box sx={{ width: '50%', padding: '0 20px', textAlign: 'left' }} className="observed opacity-0">
                    <Typography variant="h4" gutterBottom className="volkhov font-bold text-[3rem] md:text-[4.73756rem] leading-large text-lightBlack">
                        Invista já!
                    </Typography>
                    <Typography variant="body1" gutterBottom className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]">
                        Os investimentos rendem 0,52% ao mês, pagos na mesma data de criação do investimento. Utilize cálculos precisos para ganhos compostos.
                    </Typography>
                    <Typography variant="body1" gutterBottom className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]">
                        use client;
                    </Typography>
                </Box>

                <Paper elevation={4} sx={{ padding: 4, marginTop: 6, width: 'calc(50% - 50px)' }} className="observed opacity-0">
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }} className="volkhov font-bold text-[3rem] md:text-[2rem] leading-large text-lightBlack">
                        Criar Novo Investimento
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Proprietário"
                                    name="proprietario"
                                    value={formState.proprietario}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                    sx={{ borderRadius: 8 }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Data de Criação"
                                    name="dataCriacao"
                                    value={formState.dataCriacao}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                    sx={{ borderRadius: 8 }}
                                    type='date' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Valor Inicial"
                                    type="number"
                                    name="valorInicial"
                                    value={formState.valorInicial}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                    inputProps={{ min: "0" }}
                                    sx={{ borderRadius: 8 }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 8 }} disabled={isSubmitting}>
                                    {isSubmitting ? 'Enviando...' : 'Criar Investimento'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </Container>
        </>
    );
};

export default CreateInvestmentComponent;
