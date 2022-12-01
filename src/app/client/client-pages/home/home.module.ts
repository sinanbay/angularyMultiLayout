import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DxButtonModule, DxLoadPanelModule, DxNumberBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxNumberBoxModule,
    DxLoadPanelModule,
    DxButtonModule
  ],
  exports: [
  ]
})
export class HomeModule { }
