import React from 'react'
class Movie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.open(url, "_blank")
  }

  render() {
    return (
      <div onClick={this.viewMovie.bind(this)} className="col-xs-6 col-md-6 col-lg-2 card hoverable text-white bg-warning border-primary" style = {{margin: '10px', padding: '0'}}>
        <img alt='poster' src={this.props.movie.poster_src} className="poster card-img-top"/>
        <div style = {{textAlign: 'center'}}>
          <a className="name" href={"https://www.themoviedb.org/movie/" + this.props.movie.id} target="_blank" rel="noopener noreferrer">{this.props.movie.title}</a>
        </div>
      </div>
    );
  }
}

export default Movie