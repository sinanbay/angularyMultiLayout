import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLHeaderComponent } from './c-l-header/c-l-header.component';
import { CLFooterComponent } from './c-l-footer/c-l-footer.component';



@NgModule({
  declarations: [
    CLHeaderComponent,
    CLFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CLHeaderComponent,
    CLFooterComponent
  ]
})
export class ClientLayoutComponentsModule { }
