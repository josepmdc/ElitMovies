import React, { Component } from 'react';
import MovieRow from './MovieRow'
import $ from 'jquery'


export default class Buscador extends Component {

    constructor(props) {
      
      super(props)
      this.state = {}
      this.movieRows = []
      this.CargarDatosRecibidos()

    }
    /*
    Antes se cargaban las peliculas con Ajax desde React, ahora
    nos interesa usar nuestra propia API y además dar con la carga 
    própia de la página los datos de la película, eso sí, solo los
    superficiales (titulo y resumen) para más detalles haremos llamadas
    a nuestra Api pero desde React y con ajax
    */

    CargarDatosRecibidos() 
    {
      const results = this.props.datos.Peliculas.results
      
          
          results.forEach(movie => {

            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            this.movieRows.push(movieRow)


            
          });
    
          
    }
  
    loadPopularMovies() {
      const urlString = "api/Populares";
      
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Fetched data succesfully!")
          alert(searchResults)
          const results = searchResults.results
         
          var movieRows = []
          
          results.forEach(movie => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            movieRows.push(movieRow)
          });
  
          this.setState({ rows: movieRows })
  
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch data...")
        }
      })
    }
  
    performSearch(searchTerm) {
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Fetched data succesfully!")
          const results = searchResults.results
  
          var movieRows = []
  
          results.forEach(movie => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            movieRows.push(movieRow)
          });
  
          this.setState({ rows: movieRows })
  
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch data...")
        }
      })
    }
  
    searchChangeHandler(event) {
      console.log(event.target.value)
      const boundObject =  this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
    }
  
    render() {
      return (
        <div>
          <table className="titleBar">

            <tbody>
              <tr>
               
                <td width="8"/>
                <td>
               
                  <h1>MoviesDB Search con Laravel</h1>
                
                </td>
              </tr>
            </tbody>
          </table>
  
          <input style={{
            fontSize: 24,
            display: 'block',
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }} onChange = { this.searchChangeHandler.bind(this) } placeholder="Enter search term"/>
          <div className="ContienePeliculas" >
            {this.movieRows}
          </div>
          
  
        </div>
      );
    }
}


