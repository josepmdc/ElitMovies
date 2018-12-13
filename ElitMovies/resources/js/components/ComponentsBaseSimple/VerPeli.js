import React, { Component } from 'react';
import MovieRow from './MovieRow'


export default class VerPeli extends Component {

    constructor(props) 
    {
      
      super(props)
      this.state = {}
      this.Pelicula = this.props.datos.Pelicula
      this.UrlsFondos()
      this.EstilizarFondo()
      

    }
    
    EstilizarFondo()
    {
        this.EstiloFondo = {
            
            color: 'white',
            backgroundImage: "url(" + this.Pelicula.backdrop_path + ")",
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
        }
    }
    UrlsFondos()
    {
        this.Pelicula.poster_path    = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+this.Pelicula.poster_path
        this.Pelicula.backdrop_path  = "https://image.tmdb.org/t/p/w1400_and_h450_face/"+this.Pelicula.backdrop_path

    }
    
    DevolverImagen()
    {
      return (
       
         <img src={this.Pelicula.poster_path}/>
       
      )
    }
    DevolverActores()
    {
      return (
        <div className="ContienePersonajes">
            <div className="ContieneInfo">
                <div className="ContieneTituloAct">
                    <h2>
                        Actores
                    </h2>
                </div>
                <div className="ContienePersonajes">
                    
                </div>
            </div>   
        </div>

        )
    }
    DevolverGrafico() //Devuelve los divs de puntuación
    {
      this.Longitud = {
            
            
            width: this.Pelicula.vote_average*10+"%"
            
        }
      return (
        <div className="BaseGrafico">
             <div className="puntuación" style = {this.Longitud}></div>
        </div>

        )
    }



    render() {
      return(
        <div>
          
            <header className="ContieneMenuSup" style = {this.EstiloFondo}>
              <div className="FalsoFondoOsc">
                <div>
                  <div className="ContieneDatos">
                    <div className="ContieneImagenPeli">
                       {this.DevolverImagen()}
                    </div>
                    <div className="ContieneTituloDatos">
                        <div className="ContieneVerTitulo">
                          <h1>{this.Pelicula.title}</h1>
                        </div>
                      <div className="ContieneYear">
                        <h2>{this.Pelicula.release_date}</h2>
                      </div>
                      <div className="ContieneDirector">
                        <h2>James Cameron</h2>
                      </div>
                    </div>

                    <div className="ContieneInfoPuntuacion">
                      <div className="ContienePuntuacion">
                        <h2>{this.Pelicula.vote_average} </h2>
                      </div>
                      <div className="ContienePuntuacionVisual">
                         {this.DevolverGrafico()}
                      </div>
                      <div className="ContieneEtiquetas">
                        <h2>etiquetas</h2>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className="ContieneSynopsis">
                  <div className="ContieneTituloGuia">
                    <h3>Sinopsis</h3>
                  </div>
                  <p>
                    {this.Pelicula.overview}
                  </p>

                </div>

               </div>
            </header>
        
           {this.DevolverActores()}
        </div>
        );
      
      
    }
}


