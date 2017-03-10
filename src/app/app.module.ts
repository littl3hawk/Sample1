import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FuelComponent } from './fuel/fuel.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { PdfComponent } from './pdf/pdf.component';

import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FeedComponent,
    FuelComponent,
    HeroComponent,
    HeroDetailComponent,
    PdfComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }