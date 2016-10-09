import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

import { Hero }		 from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	private _heroes$: Subject<Hero[]>;
	private dataStore: {
		heroes: Hero[]
	}

	constructor() {
		this.dataStore = { heroes: [] };
		this._heroes$ = <Subject<Hero[]>>new Subject();
	}

	get heroes$() {
		return this._heroes$.asObservable();
	}

	getAll() {
		HEROES.subscribe()
	}
}