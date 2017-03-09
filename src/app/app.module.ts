import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { RouterModule }       from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FuelComponent } from './fuel/fuel.component';
import { HeroComponent } from './hero/hero.component';
import { PdfComponent } from './pdf/pdf.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FeedComponent,
    FuelComponent,
    HeroComponent,
    PdfComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }