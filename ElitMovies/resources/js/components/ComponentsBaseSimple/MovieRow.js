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
    
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    viewTrailer() {
        const url = "https://www.youtube.com/watch?v=" + "oAALE9m47dc"
        window.location.href = url
    }


    Centrar(a) //Centra el div a la pantalla
    {
        var w   = (window.innerWidth)/2;
        var h   = (window.innerHeight)/2;
        var x   = a.offsetLeft;
        var y   = a.offsetTop;
        var mw  = w-x;
        var my  = h-y;




        a.style.transform= 'translateX(-50%) translateX('+mw+'px)  translateY(-50%) ';
       

    }
    AbrirContenidos(a)
    {
        var Falso = this.refs.RefFF;
        
    }
    
    Abrir(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.classList.add('Visible');
       Falso.classList.add('Largo');
       Tit.classList.add('FondoTrans');
      
       

    }

    Cerrar(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.style.height = '';
       sino.classList.remove('Visible');
       Falso.classList.remove('Largo');
       Tit.classList.remove('FondoTrans');
        

       

    }
    
    




   

    

    render() {
        
        return (
            <a href={'/pelicula/' + this.props.movie.id}>
            <div className = "ContienePelicula" style = {this.EstiloFondo} onMouseLeave={this.Cerrar.bind(this)} onMouseOver={this.Abrir.bind(this)} onLoad={this.Cerrar.bind(this)} ref="RefPeli"  >
                <div className = "Pelicula" >
                    <div className = "FalsoFondo" ref="RefFF">
                         <div className="ContienePuntuaciones">
                            {this.props.movie.vote_average}
                        </div>
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
                            
                        </div>
                    </div>
                </div>
            </div>
            </a>







      );
    }
}

