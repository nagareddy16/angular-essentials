import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestService } from '../service/invest.service';

@Component({
  selector: 'app-invest-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invest-result.component.html',
  styleUrl: './invest-result.component.css'
})
export class InvestResultComponent {

  // results = input<{
  //   year : number;
  //   interest : number;
  //   valueEndOfYear : number;
  //   annualInvestment : number;
  //   totalInterest : number;
  //   totalAnnualInterested :number;
  // }[]>();

  private investService =inject(InvestService);

  /* get investResults(){
    return this.investService.resultData;
  } */

    /* investResults = computed(() => this.investService.resultData()); 

    investResults = () => this.investService.resultData();*/

    investResults = this.investService.resultData.asReadonly();


  /* using the directives and passing in the parent html file
  by passing an array to the object we making sure that the output of result is an array of object
  @Input() results?:{
    year : number;
    interest : number;
    valueEndOfYear : number;
    annualInvestment : number;
    totalInterest : number;
    totalAnnualInterested :number;
  }[];
  */ 
}
