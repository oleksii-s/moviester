import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

import { Hero }		 from './hero';

@Injectable()
export class HeroService {
	private source: string;
	private _heroes$: Subject<Hero[]>;
	private dataStore: {
		heroes: Hero[]
	}

	constructor(private http: Http) {
		this.source = 'mock-heroes.json'
		this.dataStore = { heroes: [] };
		this._heroes$ = <Subject<Hero[]>>new Subject();
	}

	get heroes$() {
		return this._heroes$.asObservable();
	}

	getAll() {
		this.http.get(this.source).map(resp => resp.json()).subscribe(data => {
			this.dataStore.heroes = data;
			this._heroes$.next(this.dataStore.heroes);
		}, error => console.log('can\'t load todos'));
	}
}