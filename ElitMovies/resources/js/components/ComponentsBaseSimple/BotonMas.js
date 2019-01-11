import React, { Component } from 'react';

export default class BotonMas extends Component {



    constructor(props) 
    {

    super(props)
    this.UrlsFondos();   
    this.EstilizarFondo();
    

    }



          
    EstilizarFondo()
    {
        this.EstiloFondo = {
            
            color: 'white',
            backgroundImage: "url(" + this.fondo + ")",
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
        }
    }

    UrlsFondos()
    {
        this.fondo = "/images/vacio.jpg";
    }
   





    
    Abrir(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.classList.add('Visible');
       Falso.classList.add('LargoMas');
       Tit.classList.add('FondoTrans');
      
       

    }

    Cerrar(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.style.height = '';
       sino.classList.remove('Visible');
       Falso.classList.remove('LargoMas');
       Tit.classList.remove('FondoTrans');
        

       

    }
    
    







   

    

    render() {
        
        return (

            <a href={'/pelicula'}>
                <div className = "ContienePelicula" style = {this.EstiloFondo} onMouseLeave={this.Cerrar.bind(this)} onMouseOver={this.Abrir.bind(this)} onLoad={this.Cerrar.bind(this)} ref="RefPeli"  >
                    <div className = "Pelicula" >
                        <div className = "FalsoFondo" ref="RefFF">
                             <div className="ContienePuntuaciones">
                                10
                            </div>
                            <div className="ContienePoster">
                                <img src="{this.props.movie.poster_path}"/>
                            </div>
                            <div className = "ContieneTituloSinopsis">
                            <div className="ContieneTitulo Mas" ref="RefTit">
                                    <p> Ver Más</p>
                                </div>
                                <div className="ContieneSinopsis" ref="Sino">
                                    <p>Ver más peliculas Populares</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </a>







      );
    }
}

