import { calculateExpectedBalance } from "..";

describe('calculateExpectedBalance', () => {
  it('calculates the expected balance correctly with no withdrawals', () => {
    const initialValue = 10000;
    const creationDate = new Date('2023-01-01');
    const withdrawals = [];
    const expectedBalance = calculateExpectedBalance(initialValue, creationDate, withdrawals);

    const annualInterestRate = 0.52 / 100;
    const currentDate = new Date();
    const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());
    let balance = initialValue;
    for (let i = 0; i < monthsDiff; i++) {
      balance *= (1 + annualInterestRate);
    }

    // Ajustado para comparar com precisão de 0.01
    expect(parseFloat(expectedBalance)).toBeCloseTo(balance, 2);
  });

  it('calculates the expected balance correctly with withdrawals', () => {
    const initialValue = 10000;
    const creationDate = new Date('2023-01-01');
    const withdrawals = [
      { month: '2023-02', amount: 500 },
      { month: '2023-06', amount: 1000 }
    ];
    const expectedBalance = calculateExpectedBalance(initialValue, creationDate, withdrawals);

    // Cálculo manual do saldo esperado considerando os saques
    const annualInterestRate = 0.52 / 100;
    const currentDate = new Date();
    const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());
    let balance = initialValue;
    for (let i = 0; i < monthsDiff; i++) {
      balance *= (1 + annualInterestRate);
      const withdrawal = withdrawals.find(w => w.month === `${creationDate.getFullYear() + Math.floor(i / 12)}-${((creationDate.getMonth() + i % 12) % 12 + 1).toString().padStart(2, '0')}`);
      if (withdrawal) {
        balance -= withdrawal.amount;
      }
    }

    // Ajustado para comparar com precisão de 0.01
    expect(parseFloat(expectedBalance)).toBeCloseTo(balance, 2);
  });
});
