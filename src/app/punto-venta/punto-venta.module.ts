import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoVentaListComponent } from './punto-venta-list/punto-venta-list.component';
import { PuntoVentaService} from './punto-venta.service';

import { FormsModule } from '@angular/forms';
import { PuntoVentaDetailComponent } from './punto-venta-detail/punto-venta-detail.component';

import{AppRoutingModule} from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [PuntoVentaListComponent, PuntoVentaDetailComponent, ],
  exports: [PuntoVentaListComponent],
  providers: [PuntoVentaService]
})
export class PuntoVentaModule { }