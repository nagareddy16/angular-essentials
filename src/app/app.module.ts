import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestResultComponent } from "./invest-result/invest-result.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";



@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports : [UserInputModule, HeaderComponent, BrowserModule,InvestResultComponent]
})


export class AppModule{}