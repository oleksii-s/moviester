import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService }     from './heroes/hero.service';
// import { routing } from './app.routing';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailsComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ 
  	AppComponent,
    HeroesComponent,
  	HeroDetailsComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: 	[
  	AppComponent
  ]
})
export class AppModule { }
