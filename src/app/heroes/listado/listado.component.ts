import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes : string[] = ['Spiderman', 'Hulk', 'Iroman', 'Thor'];
  heroeBorrados: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(): string{
    return this.heroeBorrados = this.heroes.shift() || '';
  }
}
