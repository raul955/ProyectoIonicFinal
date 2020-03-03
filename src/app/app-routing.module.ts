import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'listarecetas',
    loadChildren: () => import('./listarecetas/listarecetas.module').then( m => m.ListarecetasPageModule)
  },
  {
    path: 'creacion',
    loadChildren: () => import('./creacion/creacion.module').then( m => m.CreacionPageModule)
  },
  {
    path: 'borrar',
    loadChildren: () => import('./borrar/borrar.module').then( m => m.BorrarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
