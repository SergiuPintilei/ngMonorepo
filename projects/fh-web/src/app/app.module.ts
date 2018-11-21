import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FhSharedUiModule } from 'fh-shared-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FhSharedUiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
