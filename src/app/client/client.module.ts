import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientLayoutModule } from './client-layout/client-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientLayoutModule
  ],
  exports: [
    ClientLayoutModule
  ]
})
export class ClientModule { }
