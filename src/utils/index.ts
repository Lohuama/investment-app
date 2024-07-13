export interface InvestmentData {
    month: string;
    amount: number;
  }
  
export const investmentData = {
    initialValue: 10000,
    creationDate: new Date(2023, 0, 1),
    withdrawals: [
      { month: "Jan", amount: 0 }, 
      { month: "Feb", amount: 0 }, 
      { month: "Mar", amount: 2000 }, 
      { month: "May", amount: 0 }, 
      { month: "Jun", amount: 1500 } 
    ]
  };
  export const investmentData1 = {
    initialValue: 10000,
    creationDate: new Date(2023, 0, 1), 
    withdrawals: [
      { month: "Jan", amount: 0, date: new Date(2023, 0, 31) }, 
      { month: "Feb", amount: 0, date: new Date(2023, 1, 28) }, 
      { month: "Mar", amount: 2000, date: new Date(2023, 2, 31) }, 
      { month: "Apr", amount: 0, date: new Date(2023, 3, 30) }, 
      { month: "May", amount: 0, date: new Date(2023, 4, 31) }, 
      { month: "Jun", amount: 1500, date: new Date(2023, 5, 30) }
    ]
  };
  
  export const investmentData2 = {
    initialValue: 8000,
    creationDate: new Date(2019, 0, 1), 
    withdrawals: [
      { month: "Jan", amount: 0, date: new Date(2019, 0, 31) }, 
      { month: "Feb", amount: 0, date: new Date(2019, 1, 28) }, 
      { month: "Mar", amount: 3000, date: new Date(2019, 2, 31) }, 
      { month: "Apr", amount: 0, date: new Date(2019, 3, 30) }, 
      { month: "May", amount: 0, date: new Date(2019, 4, 31) }, 
      { month: "Jun", amount: 2500, date: new Date(2019, 5, 30) }
    ]
  };

   export const calculateExpectedBalance = (initialValue: number, creationDate: Date, withdrawals: { month: string; amount: number}[]) => {
    const annualInterestRate = 0.52 / 100; 
    const currentDate = new Date();
    let balance = initialValue;
  
    const monthsDiff = (currentDate.getFullYear() - creationDate.getFullYear()) * 12 + (currentDate.getMonth() - creationDate.getMonth());
  
    for (let i = 0; i < monthsDiff; i++) {
      balance *= (1 + annualInterestRate);
    }
    withdrawals.forEach((withdrawal) => {
      balance -= withdrawal.amount;
    });
  
    return balance.toFixed(2);
  };

