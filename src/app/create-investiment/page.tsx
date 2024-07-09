"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    TextField,
    Button,
    Container,
    Typography,
    Grid,
    Paper,
    Box,
    Tooltip,
    Avatar,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import investment_image from "../../../public/assets/investment.jpg";
import Image from 'next/image';
import VisaIcon from '../../../public/assets/visa.svg';
import MasterIcon from '../../../public/assets/master.svg';
import PixIcon from '../../../public/assets/pix.svg';

const CreateInvestment = () => {
    const router = useRouter();

    const [formState, setFormState] = useState({
        proprietario: '',
        dataCriacao: new Date(),
        valorInicial: '',
    });

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
            dataCriacao: date || new Date(),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseFloat(formState.valorInicial) < 0) {
            alert('O valor inicial não pode ser negativo.');
            return;
        }
        console.log('Formulário enviado:', formState);
        router.push('/');
    };

    return (
        <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #e5f3e7, #ffffff)' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'stretch' }}>
                {/* Conteúdo informativo à esquerda */}
                <Box sx={{ width: '50%', padding: '0 20px', textAlign: 'left' }}>
                    <Typography variant="h4" gutterBottom>
                        Invista já!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Os investimentos rendem 0,52% ao mês, pagos na mesma data de criação do investimento. Utilize cálculos precisos para ganhos compostos.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                        Formas de investimentos aceitas:
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Image src={VisaIcon} alt="Visa" width={40} height={40} />
                        <Image src={MasterIcon} alt="Master" width={40} height={40} />
                        <Image src={PixIcon} alt="PIX" width={40} height={40} />
                    </Box>
                </Box>

                {/* Formulário de criação de investimento à direita */}
                <Paper elevation={3} sx={{ padding: 4, marginTop: 4, width: 'calc(50% - 40px)' }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
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
                                    sx={{ borderRadius: 8 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Data de Criação"
                                        value={formState.dataCriacao}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} fullWidth required variant="outlined" />}
                                    />
                                </LocalizationProvider>
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
                                    sx={{ borderRadius: 8 }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 8 }}>
                                    Criar Investimento
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default CreateInvestment;