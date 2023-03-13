import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent {
  heroes: Heroe[] = [];
  termino:string='';

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })

    this.heroes = this._heroesService.getHeroes();
    console.log(" encontrados", this.heroes);
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
