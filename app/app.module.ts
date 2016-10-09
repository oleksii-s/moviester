import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';


import { HeroDetailsComponent } from './heroes/hero-details.component';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule,
    routing
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailsComponent 
  ],
  bootstrap: 	[
  	AppComponent
  ]
})
export class AppModule { }
