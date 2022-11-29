import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALHeaderComponent } from './a-l-header/a-l-header.component';
import { ALMenuComponent } from './a-l-menu/a-l-menu.component';
import { ALFooterComponent } from './a-l-footer/a-l-footer.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ALHeaderComponent,
    ALMenuComponent,
    ALFooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ALHeaderComponent,
    ALMenuComponent,
    ALFooterComponent
  ]
})
export class AdminLayoutComponentsModule { }
