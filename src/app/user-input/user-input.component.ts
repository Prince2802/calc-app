import { Component } from '@angular/core';
import { InvestmentService } from '../inestment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  initialInv = '0';
  annualInv = '0';
  returns = '0';
  duration = '0';

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInv: +this.initialInv,
      duration: +this.duration,
      annualInv: +this.annualInv,
      returns: +this.returns,
    });
  }
}
