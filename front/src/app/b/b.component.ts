import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

     @Input() aula: string;
     @Output() url = new EventEmitter;
  constructor() { }

  ngOnInit() {
    this.url.emit('https://portal.unitec.edu/Css/Imagenes/huella.png');
  }

}
