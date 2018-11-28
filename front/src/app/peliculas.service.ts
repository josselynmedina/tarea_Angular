import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas } from './peliculas';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas () {
    return this.http.get('http://localhost:3000/api/peliculas');
  }

  postPeliculas(peliculas: Peliculas) {
    return this.http.post('http://localhost:3000/api/peliculas', peliculas);
  }
}
