import { Component, output } from '@angular/core';
import { InvestmentInput } from '../../models/investmentInput';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestmentAmount: number = 0;
  annualInvestmentAmount: number = 0;
  expectedReturnRate: number = 0;
  duration: number = 0;

  investmentInput = output<InvestmentInput>();

  calculate() {
    this.investmentInput.emit({
      initialInvestment: this.initialInvestmentAmount,
      annualInvestment: this.annualInvestmentAmount,
      expectedReturn: this.expectedReturnRate,
      duration: this.duration,
    });
  }
}
