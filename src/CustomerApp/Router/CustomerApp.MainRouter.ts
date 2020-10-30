import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";

export const MainRoute = [
  { path: "Home", component: HomeComponent },
  { path: "Customer/Add", 
  loadChildren : './Customer/CustomerApp.Customermodule#CustomerModule' },
  { path: "Supplier/Add", 
  loadChildren : '../CustomerApp.Suppliermodule#S' },
  { path: "", component: HomeComponent }
];
