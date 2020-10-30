import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";

export const MainRoute = [
  { path: "Home", component: HomeComponent },
  { path: "Customer/Add", 
  loadChildren : '../CustomerApp.Customermodule#CustomerModule' },
  { path: "Supplier/Add", component: SupplierComponent },
  { path: "", component: HomeComponent }
];
