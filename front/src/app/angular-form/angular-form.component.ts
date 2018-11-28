import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';



@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
    pelicula: Peliculas;
    peliculas: Peliculas[] = [];
    title = 'Mis peliculass';


  constructor(private peliculasService: PeliculasService) {
    this.pelicula = new Peliculas('', '', '', 0, '', 0, '');
  }

  ngOnInit() {
    this.peliculasService.getPeliculas().subscribe(
      (data: Peliculas[]) => {
          this.peliculas = data;
      },
      (error) => {
          console.log('error conectando');
      }
  );
  }

  guardar () {
    this.peliculasService.postPeliculas(this.pelicula).subscribe(
        (res) => {
            this.peliculas.push(this.pelicula);
            window.alert('Agregado exitosamente');
        },
        (error) => {
            window.alert('Error al agregar');
        }
    );
}

}
