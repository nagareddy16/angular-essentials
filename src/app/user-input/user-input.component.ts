import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { InvestService } from '../service/invest.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investService : InvestService){}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('7');
  enteredDuration = signal('3');

  onSubmit(){
    this.investService.onCalculateInvestment({
      initialInvestment : +this.enteredInitialInvestment(),
      annualInvestment : +this.enteredAnnualInvestment(),
      expectedReturn : +this.enteredExpectedReturn(),
      duration : +this.enteredDuration()
    });

    this.enteredInitialInvestment = signal('0');
    this.enteredAnnualInvestment = signal('0');
    this.enteredExpectedReturn = signal('7');
    this.enteredDuration = signal('3');
  }
}
