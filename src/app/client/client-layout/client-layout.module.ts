import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponentsModule } from './client-layout-components/client-layout-components.module';
import { ClientLayoutComponent } from './client-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientLayoutComponentsModule
  ], exports: [
    ClientLayoutComponent
  ]
})
export class ClientLayoutModule { }
