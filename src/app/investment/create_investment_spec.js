import { render, screen } from '@testing-library/react';
import InvestmentViewPage from './page';

describe('InvestmentsPage', () => {
  afterEach(() => {
    jest.restoreAllMocks(); 
  });

  it('should render InvestmentsPage', () => {
    render(<InvestmentViewPage />);
    const pageTitle = screen.getByText(/Investments/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it('should display investment details after data is fetched', async () => {
    const mockInvestments = [{ id: 1, name: 'Investment A', amount: 1000 }];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockInvestments,
    });

    render(<InvestmentViewPage />);

    const investmentItem = await screen.findByText(/Investment A - \$1000/i);
    expect(investmentItem).toBeInTheDocument();
  });
});
