export class Peliculas {
  push(peliculas: Peliculas[]): any {
    throw new Error('Method not implemented.');
  }

    constructor(
        public Titulo: string,
        public Director: string,
        public Autorp: string,
        public Year: number,
        public Pais: string,
        public Rating: number,
        public Url: string
      ) {
          this.Titulo = Titulo;
          this.Director = Director;
          this.Autorp = Autorp;
          this.Year = Year;
          this.Pais = Pais;
          this.Rating = Rating;
          this.Url = Url;

      }
}
