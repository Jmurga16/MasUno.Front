import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhpComponent } from './pages/php/php.component';
import { PythonComponent } from './pages/python/python.component';
import { DesignComponent } from './pages/design/design.component';

const routes: Routes = [
  {
    path: 'php',
    component: PhpComponent,
  },
  {
    path: 'python',
    component: PythonComponent,
  },
  {
    path: 'design',
    component: DesignComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternaRoutingModule { }
