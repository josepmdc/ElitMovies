import React, { Component } from 'react';

export default class MovieRow extends Component {



    constructor(props) {
    super(props)
    this.UrlsFondos();
    
    this.EstilizarFondo();
   
  }


     
    EstilizarFondo()
    {
        this.EstiloFondo = {
            background: 'green',
            color: 'white',
            backgroundImage: "url(" + this.props.movie.backdrop_path + ")",
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
        }
    }
    
    UrlsFondos()
    {
        this.props.movie.poster_path    = "https://image.tmdb.org/t/p/w185"+this.props.movie.poster_path
        this.props.movie.backdrop_path  = "https://image.tmdb.org/t/p/w185"+this.props.movie.backdrop_path

    }
    
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    viewTrailer() {
        const url = "https://www.youtube.com/watch?v=" + "oAALE9m47dc"
        window.location.href = url
    }
   

    

    render() {
        return (
            <div className = "ContienePelicula" style = {this.EstiloFondo}>
                <div className = "Pelicula">
                    <div className="ContienePoster">
                        <img src={this.props.movie.poster_path}/>
                    </div>
                    <div className = "ContieneTituloSinopsis">
                        <div className="ContieneTitulo">
                            <p> { this.props.movie.title }</p>
                        </div>
                        <div className="ContieneSinopsis">
                            <p>{ this.props.movie.overview }</p>
                        </div>
                    </div>
                </div>
            </div>







      );
    }
}

