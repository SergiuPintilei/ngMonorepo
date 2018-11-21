import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FhSharedUiModule } from 'fh-shared-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FhSharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
