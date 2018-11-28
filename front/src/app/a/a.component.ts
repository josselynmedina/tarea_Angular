import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {


  imagenurl: string;

  constructor() { }

  ngOnInit() {
  }

  MostrarImagen(event) {
  this.imagenurl = event;
  }

}
