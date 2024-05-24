import { Component, EventEmitter, Output } from '@angular/core';
import { Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<Investment>();
  constructor() {}

  initialInv = '0';
  annualInv = '0';
  returns = '0';
  duration = '0';

  onSubmit() {
    this.calculate.emit({
      initialInv: +this.initialInv,
      duration: +this.duration,
      annualInv: +this.annualInv,
      returns: +this.returns,
    });
  }
}
