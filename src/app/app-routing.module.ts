import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FuelComponent } from './fuel/fuel.component';
import { HeroComponent } from './hero/hero.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'feed', component: FeedComponent },
    { path: 'fuel', component: FuelComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'pdf', component: PdfComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }