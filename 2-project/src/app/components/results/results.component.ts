import { Component, input } from '@angular/core';
import { InvestmentResult } from '../../models/investmentResult';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  investmentResults = input<InvestmentResult[]>();
}
