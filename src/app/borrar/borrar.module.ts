import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarPageRoutingModule } from './borrar-routing.module';

import { BorrarPage } from './borrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarPageRoutingModule
  ],
  declarations: [BorrarPage]
})
export class BorrarPageModule {}
