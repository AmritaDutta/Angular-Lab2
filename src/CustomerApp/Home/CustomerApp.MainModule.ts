import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from "./Customer/CustomerApp.Customercomponent";
import { HomeComponent } from "./Home/CustomerApp.Homecomponent";
import { MasterPageComponent } from "./Home/CustomerApp.MasterPagecomponent";
import { SupplierComponent } from "./Supplier/CustomerApp.Suppliercomponent";
import { MainRoute } from "../CustomerApp/Router/CustomerApp.MainRouter";

@NgModule({
  imports: [RouterModule.forRoot(MainRoute), BrowserModule, FormsModule],
  declarations: [
    CustomerComponent,
    HomeComponent,
    MasterPageComponent,
    SupplierComponent
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule {}
