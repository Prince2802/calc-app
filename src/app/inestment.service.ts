import { Injectable } from "@angular/core";
import { Investment } from "./investment.model";

@Injectable({ providedIn: 'root'})
export class InvestmentService{
    resultsData?: {
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[];
      
        CalculateInvestmentResults(data: Investment) {
          const { initialInv, annualInv, returns, duration } = data;
          const annualData = [];
          let investmentValue = initialInv;
      
          for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (returns / 100);
            investmentValue += interestEarnedInYear + annualInv;
            const totalInterest =
              investmentValue - annualInv * year - initialInv;
            annualData.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: annualInv,
              totalInterest: totalInterest,
              totalAmountInvested: initialInv + annualInv * year,
            });
          }
      
          this.resultsData = annualData;
        }
}