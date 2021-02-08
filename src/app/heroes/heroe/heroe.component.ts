import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Iroman';
  edad: number = 24;

  obtenerNombre(): string {
    return ` ${ this.nombre } - ${ this.edad } `;
  }

  get capitalizado():string {
    return `${this.nombre.toUpperCase()}`;
  }

  onCambiarHeroe(  ): void {
     this.nombre = 'Spiderman';
  }

  onCambiarEdad(): void {
    this.edad = 30;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
