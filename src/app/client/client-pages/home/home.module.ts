import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DxButtonModule, DxNumberBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxNumberBoxModule,
    DxButtonModule
  ],
  exports: [
  ]
})
export class HomeModule { }
