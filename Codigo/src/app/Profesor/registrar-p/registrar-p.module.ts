import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPPageRoutingModule } from './registrar-p-routing.module';

import { RegistrarPPage } from './registrar-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPPageRoutingModule
  ],
  declarations: [RegistrarPPage]
})
export class RegistrarPPageModule {}
