import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MainRoute } from "../../CustomerApp/Router/CustomerApp.MainRouter";
import { HomeComponent } from "../../CustomerApp/Home/CustomerApp.Homecomponent";
import { MasterPageComponent } from "../../CustomerApp/Home/CustomerApp.MasterPagecomponent";

@NgModule({
  imports: [RouterModule.forRoot(MainRoute), BrowserModule, FormsModule],
  declarations: [HomeComponent, MasterPageComponent],
  bootstrap: [MasterPageComponent]
})
export class MainModule {}
