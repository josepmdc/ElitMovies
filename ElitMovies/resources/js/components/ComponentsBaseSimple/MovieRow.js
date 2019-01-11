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
            
            color: 'white',
            backgroundImage: "url(" + this.props.movie.backdrop_path + ")",
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
        }
    }
   
    
    UrlsFondos()
    {
        this.props.movie.poster_path    = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+this.props.movie.poster_path
        this.props.movie.backdrop_path  = "https://image.tmdb.org/t/p/w1400_and_h450_face/"+this.props.movie.backdrop_path

    }
    

   
    
    Abrir(e)
    {
       var Options     = this.refs.Options;
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.classList.add('Visible');
       Falso.classList.add('Largo');
       Tit.classList.add('FondoTrans');
       Options.classList.add('Ver');
      
       

    }

    Cerrar(e)
    {
       var Options     = this.refs.Options;
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.style.height = '';
       sino.classList.remove('Visible');
       Falso.classList.remove('Largo');
       Tit.classList.remove('FondoTrans');
       Options.classList.remove('Ver');
        

       

    }
    
    




   

    

    render() {
        
        return (
            <a href={'/pelicula/' + this.props.movie.id}>
            <div className = "ContienePelicula" style = {this.EstiloFondo} onMouseLeave={this.Cerrar.bind(this)} onMouseOver={this.Abrir.bind(this)} onLoad={this.Cerrar.bind(this)} ref="RefPeli"  >
                <div className = "Pelicula" >
                    <div className = "FalsoFondo" ref="RefFF">
                         
                        <div className="ContienePoster">
                            <img src={this.props.movie.poster_path}/>
                        </div>
                        <div className = "ContieneTituloSinopsis">
                        <div className="ContieneTitulo" ref="RefTit">
                                <p> { this.props.movie.title }</p>
                            </div>
                            <div className="ContieneSinopsis" ref="Sino">
                                <p>{ this.props.movie.overview }</p> 
                            </div>
                            ...
                            <div className="ContieneOpcionesPelicula" ref="Options">
                                <div className="OpcionPelicula">
                                    <p>Ver Película</p>
                                </div>
                                <div className="OpcionPelicula">
                                    <p>Ver Trailer</p>
                                </div>
                                <div className="OpcionPelicula">
                                    <p>{this.props.movie.vote_average}</p>
                                    <p>Comentar</p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </a>







      );
    }
}

