import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPagesModule } from './admin-pages/admin-pages.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminPagesModule,
    AdminLayoutModule
  ],
  exports: [
    AdminPagesModule,
    AdminLayoutModule
  ]
})
export class AdminModule { }
