import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarecetasPage } from './listarecetas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarecetasPageRoutingModule {}
