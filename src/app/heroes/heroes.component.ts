import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent { 
  selectedHero? : Hero ;
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
  heroes : Hero[] = [];
  constructor(private heroService: HeroService) {

  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

