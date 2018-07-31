import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { StartPageComponent } from './start-page/start-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogWindowComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
