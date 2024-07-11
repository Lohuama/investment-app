// CreateInvestment.test.js

import { render, screen } from '@testing-library/react';
import CreateInvestment from '../components/CreateInvestment';

test('renders CreateInvestment component', () => {
    render(<CreateInvestment />);
    expect(screen.getByText(/Criar Novo Investimento/i)).toBeInTheDocument();
});
