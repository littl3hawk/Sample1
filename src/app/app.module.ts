import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FuelComponent } from './fuel/fuel.component';
import { FuelTrendComponent } from './fuel/fuel-trend.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { PdfComponent } from './pdf/pdf.component';

import { HeroService } from './service/hero.service';
import { FuelDetailService } from './service/fuel-detail.service';
import { FuelTrendService } from './service/fuel-trend.service';
import { PdfService } from './service/pdf.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FeedComponent,
    FuelComponent,
    FuelTrendComponent,
    HeroComponent,
    HeroDetailComponent,
    PdfComponent
  ],
  providers: [
    HeroService,
    FuelDetailService,
    FuelTrendService,
    PdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }