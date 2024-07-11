import { render, screen } from '@testing-library/react';
import InvestmentViewPage from './page';

describe('InvestmentsPage', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Limpa todos os mocks
  });

  it('should render InvestmentsPage', () => {
    render(<InvestmentViewPage />);
    const pageTitle = screen.getByText(/Investments/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it('should display investment details after data is fetched', async () => {
    // Simular uma resposta de API ou dados fictícios
    const mockInvestments = [{ id: 1, name: 'Investment A', amount: 1000 }];

    // Mock da função que busca os investimentos (exemplo)
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockInvestments,
    });

    render(<InvestmentViewPage />);

    // Aguardar a renderização da página e a carga dos dados
    const investmentItem = await screen.findByText(/Investment A - \$1000/i);
    expect(investmentItem).toBeInTheDocument();
  });
});
