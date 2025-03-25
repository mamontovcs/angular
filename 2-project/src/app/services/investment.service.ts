import { Injectable } from '@angular/core';
import { InvestmentInput } from '../models/investmentInput';
import { InvestmentResult } from '../models/investmentResult';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    const {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    } = data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push(new InvestmentResult(year, interestEarnedInYear, investmentValue,
        annualInvestment, totalInterest, initialInvestment + annualInvestment * year));
    }

    return annualData;
  }

}
