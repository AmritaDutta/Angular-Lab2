import { CustomerComponent } from "../../CustomerApp/Customer/CustomerApp.Customercomponent";
import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";
import { SupplierComponent } from "../../CustomerApp/Supplier/CustomerApp.Suppliercomponent";

export const MainRoute = [
  { path: "Home", component: HomeComponent },
  { path: "Customer", component: CustomerComponent },
  { path: "Supplier", component: SupplierComponent },
  { path: "", component: HomeComponent }
];
