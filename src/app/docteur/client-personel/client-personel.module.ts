import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPersonelPageRoutingModule } from './client-personel-routing.module';

import { ClientPersonelPage } from './client-personel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPersonelPageRoutingModule
  ],
  declarations: [ClientPersonelPage]
})
export class ClientPersonelPageModule {}
