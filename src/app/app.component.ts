import { Component, input, Output, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { type InvestInput } from './invest-input.model';
import { InvestResultComponent } from "./invest-result/invest-result.component";
import { InvestService } from './service/invest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-essentials';

  
  constructor(private investService : InvestService){};
  
}
