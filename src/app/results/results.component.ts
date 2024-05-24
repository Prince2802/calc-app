import { Component, Input } from '@angular/core';
import { InvestmentResults } from '../investment.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor() { }
  @Input() results?: InvestmentResults[];
  ngOnInit(){
  }

}
