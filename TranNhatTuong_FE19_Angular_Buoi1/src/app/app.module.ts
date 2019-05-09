import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaitapModuleComponent } from './baitap-module/baitap-module.component';
import { BaitapModuleModule } from './baitap-module/baitap-module.module';

@NgModule({
  declarations: [
    AppComponent,
    BaitapModuleComponent
  ],
  imports: [
    BrowserModule,
    BaitapModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
