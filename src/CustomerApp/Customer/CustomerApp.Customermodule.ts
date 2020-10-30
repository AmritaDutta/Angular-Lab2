import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "../../CustomerApp/Customer/CustomerApp.Customercomponent";
import { CustomerRoute } from "../../CustomerApp/Router/CustomerApp.CustomerRouter";

@NgModule({
  imports: [RouterModule.forChild(CustomerRoute), CommonModule, FormsModule],
  declarations: [CustomerComponent],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {}
