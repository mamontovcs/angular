import { Component } from '@angular/core';
import { InvestmentInput } from './models/investmentInput';
import { InvestmentService } from './services/investment.service';
import { InvestmentResult } from './models/investmentResult';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {

  investmentResult: InvestmentResult[] = [];
  constructor(private investmentService: InvestmentService) { }

  onInputSubmitted(investementInput: InvestmentInput) {
    this.investmentResult = this.investmentService.calculateInvestmentResults(investementInput);
  }
}
