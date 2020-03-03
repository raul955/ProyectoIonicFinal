import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarecetasPageRoutingModule } from './listarecetas-routing.module';

import { ListarecetasPage } from './listarecetas.page';
import { Recetas } from '../recetas';
import { CreacionserviceService } from '../creacion/creacionservice.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarecetasPageRoutingModule
  ],
  declarations: [ListarecetasPage]
})
export class ListarecetasPageModule {}
