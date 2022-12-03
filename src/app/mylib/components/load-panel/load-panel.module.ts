import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPanelComponent } from './load-panel.component';
import { DxLoadPanelModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    LoadPanelComponent
  ],
  imports: [
    CommonModule,
    DxLoadPanelModule,
  ],
  exports: [
    LoadPanelComponent
  ]
})
export class LoadPanelModule { }
