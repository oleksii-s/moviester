import { Component, Input } from '@angular/core';
import { Hero }		 		from './hero';

@Component({
	selector: 'hero-details',
	templateUrl: 'app/heroes/hero-details.component.html'
})
export class HeroDetailsComponent {
	@Input()
	hero: Hero;
}
