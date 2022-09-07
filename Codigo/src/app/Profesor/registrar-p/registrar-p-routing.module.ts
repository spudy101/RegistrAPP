import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarPPage } from './registrar-p.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPPageRoutingModule {}
