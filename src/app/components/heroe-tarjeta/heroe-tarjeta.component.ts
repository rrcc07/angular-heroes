import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent {
  @Input() heroe:any = {};
  @Input() index:number=0;

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private router: Router){
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit(){

  }

  verHeroe(){
    //console.log(this.index)
    this.router.navigate(['/heroe', this.heroe.id])
    //this.heroeSeleccionado.emit(this.index);
  }
}
