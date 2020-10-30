import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";

export const MainRoute = [
  { path: "Home", component: HomeComponent },
  {
    path: "Customer/Add",
    loadChildren: "../Customer/CustomerApp.Customermodule#CustomerModule"
  },
  {
    path: "Supplier/Add",
    loadChildren: "../Supplier/CustomerApp.Suppliermodule#SupplierModule"
  },
  { path: "", component: HomeComponent }
];
