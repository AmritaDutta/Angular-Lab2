import { Component } from "@angular/core";
import { Customer } from "./CustomerApp.Customermodel";

@Component({
  templateUrl: "./CustomerApp.Customerview.html"
})
export class CustomerComponent {
  title = "CustomerApplication";
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
