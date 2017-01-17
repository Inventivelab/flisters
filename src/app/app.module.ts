import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingsService } from './listings.service';


@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
