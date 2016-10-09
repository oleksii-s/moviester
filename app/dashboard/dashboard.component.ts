import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {

  heroes = <Observable<Hero[]>>new Observable();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
    	this.heroes = this.heroService.heroes$;
		this.heroService.getAll();
	}

  gotoDetail(hero: Hero): void { /* not implemented yet */}
}
