
import React, { Component } from 'react';
import Editor               from '../Editor.js'
import Comentarios          from './Comentarios.js'
import Actor                from './Actor.js'



export default class VerPeli extends Component {

    constructor(props) 
    {
      
      super(props)
       this.state = {
        error: null,
        isLoaded: false,
        actores: []
      };
      this.Pelicula = this.props.datos.Pelicula
      this.UrlsFondos()
      this.EstilizarFondo()
      //this.Menu = React.createRef()
     
      this.PrepararScroll() //Preparamos las funciones para hacer el scroll
      this.CargarActores()
     
      
      

    }
    PrepararScroll()
    {
      window.addEventListener('scroll', this.ComprobarScroll.bind(this));

      
    }
    ComprobarScroll(e) //Comprueba que el scroll de la ventana de nuestro navegador pasa el Elemento Pelicula
    {
    
      //if (window.scrollY>this.myRef)
      var Menu = this.refs.myRef;
      if (window.scrollY>=Menu.clientHeight)
      {
       this.PonerMenuSuperior();
      } else {
        this.QuitarMenuSuperior();
      }
      
    }
    PonerMenuSuperior() //Esta funcion coloca un Menu superior que indica el titulo y portada
    {
      /*
      this.EstiloFijo= {
            
            position: 'fixed',
            top: '0',
            left: '0', 
            marginTop: '0',
            background: 'red'
            
        }
        */
       
        
        this.refs.MenuAuxi.classList.add("Abierto");
        this.refs.MenuAuxi2.classList.add("Abierto");
        //this.refs.MenuAuxi2.classList.add("MenuAuxi2");
    }
    QuitarMenuSuperior()
    {
      
      this.refs.MenuAuxi.classList.remove("Abierto");
       this.refs.MenuAuxi2.classList.remove("Abierto");
      //this.refs.MenuAuxi.classList.remove("MenuAuxi1");
      //this.refs.MenuAuxi2.classList.remove("MenuAuxi2");
      //this.refs.ImagenMenu.classList.remove("ImagenFija");
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
        //this.Pelicula.poster_path    = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+this.Pelicula.poster_path
        this.Pelicula.backdrop_path  = "https://image.tmdb.org/t/p/w1400_and_h450_face/"+this.Pelicula.backdrop_path

    }
    
    DevolverImagen()
    {
      return (
       
         <img src=""/>
       
      )
    }
    DevolverActores()
    {
      return (
        <div className="ContienePersonajes">
            <div className="ContieneInfo">
                <div className="ContieneTituloAct">
                    
                        <p>Actores</p>
                    
                </div>
                 {this.Cargador()}
                <div className="ContienePersonajeslist">
                    {this.PonerActores()}
                   
                </div>
                <div className="VerMasActores">
                  <button  onClick={this.AbrirTodos.bind(this)}> Ver más </button>
                </div>
                
            </div>   
        </div>

        )
    }
    AbrirTodos()
    {
      this.refs.ConteneActores.classList.add("ActoresAbierto");
    }
    Cargador()
    {
      {
      return (
        <div ref= "CargadorActor" className="ContieneCargadorActores">
            <div className="CargadorActores"></div>
        </div>

        )
    }
    }
    CargarActores()
    {
        fetch("http://"+window.location.hostname+":"+window.location.port+"/api/pelicula/actores/"+this.Pelicula.id)
        .then(res => res.json())
        .then(


          (result) => {
            var ListadoComemtarios = [];
            const resultados = result.cast;

            resultados.forEach(coment => {
              
              const comentarioIn = <Actor key= {coment.id} datos = {coment} />
              ListadoComemtarios.push(comentarioIn)

            });

            this.setState({
              actores: ListadoComemtarios
            });
            this.QuitarCargadorActores()
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    QuitarCargadorActores()
    {
      var cargador = this.refs.CargadorActor;
      cargador.classList.add("CargadorActorAbierto")
    }


    PonerActores()
    {
      const { error, isLoaded, actores } = this.state;
      return (
        <div ref="ConteneActores">
          {actores.map(item => (
              <div >
                
                {item}
                

              </div>
            ))}
        </div>
        );
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

        <section>
            <header className="Auxi1" ref="MenuAuxi" style = {this.EstiloFondo}>
              <div className ="Auxi2" ref="MenuAuxi2" >
                <h1>{this.Pelicula.title}</h1>
              </div>
            </header>
            <div className="ContieneMenuSup" ref="myRef"  style = {this.EstiloFondo}>
              <div className="FalsoFondoOsc" >
                 <div className="ContieneTodoInfo" >
                    <div className="ContienePortadaPeli">
                      <div className="ContieneImagenPeli" ref="ImagenMenu">
                         {this.DevolverImagen()}
                      </div>
                    </div>
                    <div className="ContieneInfoPeli">
                      <div className="ContieneMenuSuperiorInfo">
                          <div className="ContieneTituloDatos">
                            <div className="ContieneVerTitulo" ref="TituloMenu">
                              <h1>{this.Pelicula.title}</h1>
                            </div>
                            <div className="ContieneYear">
                             <h2>{this.Pelicula.release_date}</h2>
                            </div>
                            <div className="ContieneDirector">
                              <h2>James Cameron</h2>
                            </div>
                          </div>
                          <div className="ContienePuntuacionYmas"> 
                            <div className ="ContienePuntuacion">
                              <h2>
                                {this.Pelicula.vote_average}
                              </h2>
                            </div>
                           
                            <div className="ContienePuntuacionVisual">
                             {this.DevolverGrafico()}
                            </div>
                          </div>
                      </div>
                   

                      <div className="ContieneMenuInferior">
                        <div className="ContieneResumen">
                            <div className="ContieneSynopsis">
                              <div className="ContieneTituloGuia">
                                <h3>Sinopsis</h3>
                              </div>
                              <div className="ContieneSynopsisPeli">
                                <p>
                                  {this.Pelicula.overview}
                                </p>
                              </div>


                          </div>

                        </div>
                      </div>
                    </div>
                </div>

                

               </div>
            </div>
            <div className="ContieneContenidoPagina">
              <div className="ContienePaginaContenido">
                <div className="ContieneComentarios">
                   <Comentarios idPelicula = {this.Pelicula.id}/>
                </div>
                <div className="ContieneRelacionados">
                  {this.DevolverActores()}
                </div>
              </div>
              
            </div>
            
           
          
        </section>
        );
      
      
    }
}


