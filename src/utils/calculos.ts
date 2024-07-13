import { Retirada } from "./mock-onvestment";

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

export const calcularDadosInvestimento = (dataCriacao: string, valorInicial: number, retiradas: Retirada[]) => {
    const dataCriacaoMs = new Date(dataCriacao).getTime();
    const hojeMs = new Date().getTime();
    const mesesInvestimento = Math.floor((hojeMs - dataCriacaoMs) / (1000 * 60 * 60 * 24 * 30));
    const taxaMensal = 0.52 / 100;
  
    let saldoComRetiradas = valorInicial;
    let saldoSemRetiradas = valorInicial;
    let dados = [];
  
    for (let i = 0; i <= mesesInvestimento; i++) {
      const saldoAntesRetirada = saldoComRetiradas;
      const retiradasNoMes = retiradas.filter(r => {
        const dataRetirada = new Date(r.data).getTime();
        return dataRetirada >= dataCriacaoMs + (i * 30 * 24 * 60 * 60 * 1000) && dataRetirada < dataCriacaoMs + ((i + 1) * 30 * 24 * 60 * 60 * 1000);
      });
  
      let totalRetirada = 0;
      let totalImpostos = 0;
  
      retiradasNoMes.forEach(retirada => {
        const tempoRetiradaMeses = i;
        const imposto = (tempoRetiradaMeses < 12) ? retirada.valor * 0.225 : 0;
        totalRetirada += retirada.valor;
        totalImpostos += imposto;
        saldoComRetiradas -= retirada.valor + imposto;
      });
  
      saldoComRetiradas = saldoAntesRetirada * Math.pow(1 + taxaMensal, 1);
      saldoSemRetiradas *= Math.pow(1 + taxaMensal, 1);
  
      dados.push({
        month: i + 1,
        saldoComRetiradas: saldoComRetiradas.toFixed(2),
        saldoSemRetiradas: saldoSemRetiradas.toFixed(2),
        totalRetirada: totalRetirada.toFixed(2),
        totalImpostos: totalImpostos.toFixed(2)
      });
    }
  
    return dados;
  };
  
  
