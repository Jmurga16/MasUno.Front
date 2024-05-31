import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'principal',
    loadChildren: () =>
      import('./modules/principal/principal.module').then((m) => m.PrincipalModule),
  },
  {
    path: 'interna',
    loadChildren: () =>
      import('./modules/interna/interna.module').then((m) => m.InternaModule),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
