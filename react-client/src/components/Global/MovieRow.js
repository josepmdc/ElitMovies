import React from 'react'
import config from '../../config'
import $ from 'jquery'

class MovieRow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.getTrailerLink(this.props.movie.media_type, this.props.movie.id)
  }

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.open(url, "_blank")
  }

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
        this.setState({ trailer: trailerUrl })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data...")
      }
    });
  }

  render() {
    return (
      <div className="item">
        <img alt='poster' src={this.props.movie.poster_src} className="poster" />
        <div className="info">
          <a className="name" href={"https://www.themoviedb.org/movie/" + this.props.movie.id} target="_blank" rel="noopener noreferrer">{this.props.movie.title}</a>
          <div className="meta">
            <span>IMDb: <span className="imdb">{this.props.movie.vote_average} </span></span>
            <span><span className="year">Release: </span> {this.props.movie.release_date} </span>
          </div>
          <div className="genre">
            <span><a href = {this.state.trailer} target = "_blank" rel="noopener noreferrer">Trailer</a></span>
          </div>
        </div>
      </div>
    );
  }
}


/*
<a className = "viewButton" href = { "https://www.themoviedb.org/movie/" + this.props.movie.id } target = "_blank" rel="noopener noreferrer">View</a>
<a className = "trailerButton" href = { this.props.movie.trailer_src } target = "_blank" rel="noopener noreferrer">Trailer</a>
*/

export default MovieRow