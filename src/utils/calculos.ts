export const calcularGanhoComposto = (valorInicial, meses, taxaMensal) => {
    let saldo = valorInicial;
    const saldoMensal = [];

    for (let i = 0; i < meses; i++) {
        saldo += saldo * taxaMensal;
        saldoMensal.push({ month: i + 1, saldoEsperado: saldo.toFixed(2) });
    }

    return saldoMensal;
};

export const calcularTributacao = (valorRetirada, dataCriacao) => {
    const dataAtual = new Date();
    const dataCriacaoInvestimento = new Date(dataCriacao);
    const diferencaMeses = (dataAtual.getFullYear() - dataCriacaoInvestimento.getFullYear()) * 12 + dataAtual.getMonth() - dataCriacaoInvestimento.getMonth();
    
    let taxaImposto;
    if (diferencaMeses < 12) {
        taxaImposto = 0.225; // 22.5%
    } else if (diferencaMeses < 24) {
        taxaImposto = 0.185; // 18.5%
    } else {
        taxaImposto = 0.15; // 15%
    }
    
    const valorImposto = valorRetirada * taxaImposto;
    return valorImposto.toFixed(2);
};
