export interface Retirada {
    data: string;
    valor: number;
  }
  
  export interface Investimento {
    id: number;
    proprietario: string;
    dataCriacao: string;
    valorInicial: number;
    retiradas: Retirada[];
  }
  
  const mockInvestments: Investimento[] = [
    {
      id: 1,
      proprietario: "João Silva",
      dataCriacao: "2022-01-01",
      valorInicial: 10000,
      retiradas: [
        { data: "2022-06-01", valor: 2000 },
        { data: "2023-01-01", valor: 1500 },
      ]
    },
    {
      id: 2,
      proprietario: "Maria Souza",
      dataCriacao: "2021-05-01",
      valorInicial: 20000,
      retiradas: [
        { data: "2022-05-01", valor: 5000 },
        { data: "2023-01-01", valor: 2500 },
      ]
    }
  ];
  
  export default mockInvestments;
  