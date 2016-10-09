import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Hero }		 from './hero';
import { HeroService } from './hero.service';
 
@Component ({
	selector: 'heroes',
	templateUrl: 'app/app.component.html',
	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	title = 'Tour of Hero';
	heroes = <Observable<Hero[]>>new Observable();
	selectedHero: Hero;

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
    	this.heroes = this.heroService.heroes$;
		this.heroService.getAll();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
