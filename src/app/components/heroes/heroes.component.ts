import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {

  heroes:Heroe[] = [];
  constructor(private _heroesService: HeroesService,
    private router: Router) {

  }
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx:number){
    console.log("aqui en heroes");
    this.router.navigate(['/heroe', idx])
  }
}
