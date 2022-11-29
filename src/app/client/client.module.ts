import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientLayoutModule } from './client-layout/client-layout.module';
import { ClientPagesModule } from './client-pages/client-pages.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientLayoutModule,
    ClientPagesModule
  ],
  exports: [
    
  ]
})
export class ClientModule { }
