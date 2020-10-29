import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CustomerComponent ],
  bootstrap:    [ MasterPageComponent ]
})
export class MainModule { }
