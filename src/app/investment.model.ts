export interface Investment {
    initialInv: number,
    duration: number,
    annualInv: number,
    returns: number
  }

  export interface InvestmentResults {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }