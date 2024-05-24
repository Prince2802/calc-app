import { Component } from '@angular/core';
import { InvestmentService } from '../inestment.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor(private invService: InvestmentService){}

  get results(){
    return this.invService.resultsData;
  }
}
