import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DxButtonModule, DxLoadPanelModule, DxNumberBoxModule } from 'devextreme-angular';
import { LoadPanelModule } from '../../../mylib/components/load-panel/load-panel.module';
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxNumberBoxModule,
    DxLoadPanelModule,
    //RouterModule,
    DxButtonModule,
    LoadPanelModule
  ],
  exports: [
  ]
})
export class HomeModule { }
