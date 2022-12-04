import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';

declare var $: any

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    ClientModule
  ],
  providers: [
    { provide: "baseUrl", useValue: "http://localhost:5100/api", multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//$(function () { alert("jq execute"); });
