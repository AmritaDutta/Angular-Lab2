import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SupplierComponent } from "../../CustomerApp/Supplier/CustomerApp.Suppliercomponent";
import { SupplierRoute } from "../../CustomerApp/Router/CustomerApp.SupplierRouter";

@NgModule({
  imports: [RouterModule.forChild(SupplierRoute), CommonModule, FormsModule],
  declarations: [SupplierComponent],
  bootstrap: [SupplierComponent]
})
export class SupplierModule {}
