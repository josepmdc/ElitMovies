
import React, { Component } from 'react';
import MovieRow             from './MovieRow'
import Comentario           from './Comentario.js'
import Editor               from '../Editor.js'



export default class Comentarios extends Component {

    constructor(props) 
    {
      super(props)
      this.ListaComentarios = []
      const movieRow = <Comentario key= '1' />
      this.ListaComentarios.push(movieRow)
      this.PrepararDatos()
      //alert(window.location.hostname)
      

    }

    PrepararDatos() //Cargamos las opiniones por el Id de la pelicula
    {
      $.ajax({
      url: window.location.hostname+"?",
      success: (searchResults) => {
        const results = searchResults.results.slice(0, 4)

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          if (movie.release_date !== undefined) movie.release_date = (movie.release_date).substring(0, 4)
          //movie.genres = this.getMovieGenres(movie.media_type, movie.genre_ids);
          if (movie.title !== undefined) {
            const movieRow = <MovieRow key={movie.id} movie={movie} />;
            movieRows.push(movieRow)
          }
        });

        this.setState({ rows: movieRows })

      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data...")
      }
    })
    }





 



      
      



    render() {
      
      return(
        <div>
          {this.ListaComentarios}
        </div>


           
        
        );
      
      
    }
}


