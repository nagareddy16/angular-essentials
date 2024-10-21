import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { InvestResultComponent } from "../invest-result/invest-result.component";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations : [UserInputComponent],
    imports : [FormsModule, InvestResultComponent],
    exports : [UserInputComponent]
})


export class UserInputModule{}