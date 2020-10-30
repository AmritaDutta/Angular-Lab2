import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "../../CustomerApp/Customer/CustomerApp.Customercomponent";


@NgModule({
  imports: [RouterModule.forRoot(MainRoute), BrowserModule, FormsModule],
  declarations: [ CustomerComponent ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {}
