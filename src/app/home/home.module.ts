import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { DetalhesPage } from '../detalhes/detalhes.page';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPage,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
