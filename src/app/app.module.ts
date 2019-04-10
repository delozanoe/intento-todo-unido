import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import{AppRoutingModule} from './app-routing/app-routing.module';

import{PuntoVentaModule} from './punto-venta/punto-venta.module';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, PuntoVentaModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
