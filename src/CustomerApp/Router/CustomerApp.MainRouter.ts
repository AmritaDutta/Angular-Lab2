import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";

export const MainRoute = [
  { path: "Home", component: HomeComponent },
  {
    path: "Customer",
    loadChildren: "../Customer/CustomerApp.Customermodule#CustomerModule"
  },
  {
    path: "Supplier",
    loadChildren: "../Supplier/CustomerApp.Suppliermodule#SupplierModule"
  },
  { path: "", component: HomeComponent }
];
