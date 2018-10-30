import React from 'react';
import '../App.css';
import MovieRow from './MovieRow'
import $ from 'jquery'
import config from '../config'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    //this.loadPopularMovies()
  }

  //#region Unused functions

  // Carga las películas más populares en TheMovieDB
  loadPopularMovies() {
    const urlString = `https://api.themoviedb.org/3/discover/movie?api_key=${config.movieDBbApiKey}&sort_by=popularity.desc`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          movie.trailer_src = this.getTrailerLink(movie);
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow)
        });

        this.setState({ rows: movieRows })

      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data...")
      }
    })
  }

  // Busca el link del tráiler en la API de TheMovieDB
  getTrailerLink(mediaType, movieId) {
    let urlString = '';
    let trailerUrl = "https://www.youtube.com/watch?v=";

    if (mediaType === "movie") {
      urlString = 'https://api.themoviedb.org/3/movie/' + movieId + `/videos?language=en&api_key=${config.movieDBbApiKey}`
    }
    else if (mediaType === "tv") {
      urlString = 'https://api.themoviedb.org/3/tv/' + movieId + `/videos?language=en&api_key=${config.movieDBbApiKey}`
    }

    $.ajax({
      url: urlString,
      async: true,
      crossDomain: true,
      method: "GET",
      success: (searchResults) => {
        console.log("Fetched data succesfully!");
        const results = searchResults.results;
        if (results !== undefined) {
          results.forEach(trailer => {
            if (trailer.type === "Trailer") {
              trailerUrl = trailerUrl + trailer.key
            }
          })
        }
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data...")
      }
    });
    return trailerUrl;
  }
  //#endregion

  //#region Functions

  // Realiza la busqueda en la API de TheMovieDB (Lo busca todo, series, películas y actores)
  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/multi?api_key=${config.movieDBbApiKey}&query=` + searchTerm

    $.ajax({
      url: urlString,
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

  getMovieGenres(mediaType, movieGenreIds) {

    if (mediaType === undefined || movieGenreIds === undefined) {
      return []
    }

    var urlString = ''

    if (mediaType === "movie") {
      urlString = `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.movieDBbApiKey}&language=en-US`
    }
    else if (mediaType === "tv") {
      urlString = `https://api.themoviedb.org/3/genre/tv/list?api_key=${config.movieDBbApiKey}&language=en-US`
    }
    var genres = []

    $.ajax({
      url: urlString,
      async: true,
      crossDomain: true,
      method: "GET",
      success: searchResults => {
        for (let i = 0; i < movieGenreIds.length; i++) {
          for (let j = 0; j < searchResults.genres.length; i++) {
            console.log(searchResults.genres[j].id)
            if (movieGenreIds[i] === searchResults.genres[j].id) {
              genres.push(searchResults.genres[j].name)
            }
          }
        }
        return genres
      },
      error: (xhr, status, err) => {
        return "Failed to fetch data..."
      }
    })
  }

  // Muestra un dropdown, excepto si el input del buscador esta vacío
  showDropdown() {
    document.getElementById("suggestions").style.display = "block"
    document.getElementById("viewAll").style.display = "block"
  }

  hideDropdown() {
    document.getElementById("suggestions").style.display = "none"
    document.getElementById("viewAll").style.display = "none"
  }

  // Realiza la busqueda y muestra el dropdown con los resultados
  searchChangeHandler(event) {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
    var input = document.getElementById("searchBar")
    this.showDropdown()
    if (input.length === 0 || input.value === "") {
      this.hideDropdown()
    }
  }

  //#endregion

  //#region Render component
  render() {
    return (
      <div id="search">
        <input id="searchBar" placeholder="Enter keywords here" onChange={this.searchChangeHandler.bind(this)} autoComplete="off" type="text"></input>
        <div id="suggestions">
          {this.state.rows}
          <span id = "viewAll">View All</span>
        </div>

      </div>
    );
  }
  //#endregion
}

export default Search;