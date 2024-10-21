import { Injectable, signal } from '@angular/core';
import { InvestInput } from '../invest-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestService {

  constructor() { }

  resultData = signal<{
    year : number;
    interest : number;
    valueEndOfYear : number;
    annualInvestment : number;
    totalInterest : number;
    totalAnnualInterested :number;
  }[] | undefined>(undefined);


  onCalculateInvestment(data : InvestInput) {

    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    
    const annualData = [];
    let investmentValue = initialInvestment;
    for(let i=0; i<duration; i++){
      const year = i+1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInvestment = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year : year,
        interest : interestEarnedInYear,
        valueEndOfYear : annualInvestment,
        annualInvestment : annualInvestment,
        totalInterest : totalInvestment,
        totalAnnualInterested : initialInvestment + annualInvestment * year
      });
      
    }
    
    /* this.resultData = annualData; */
    this.resultData.set(annualData);
  }
}
