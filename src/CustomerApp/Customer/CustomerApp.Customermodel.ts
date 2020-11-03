import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class Customer {
  CustomerCode: String = "";
  CustomerName: String = "";
  CustomerAmount: Number = 0;
  FormCustomerGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.FormCustomerGroup = _builder.group({});

    this.FormCustomerGroup.addControl(
      "FormNameControl",
      new FormControl("", Validators.required)
    );

    var validationcollection = [];
    validationcollection.push("", Validators.required);
    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

    this.FormCustomerGroup.addControl(
      "FormCodeControl",
      new FormControl("", Validators.compose(validationcollection))
    );
  }
}
