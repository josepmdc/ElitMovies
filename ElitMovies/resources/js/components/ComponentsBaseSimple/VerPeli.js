
import React, { Component } from 'react';
import Editor               from '../Editor.js'
import Comentarios          from './Comentarios.js'



export default class VerPeli extends Component {

    constructor(props) 
    {
      
      super(props)
      this.state = {}
      this.Pelicula = this.props.datos.Pelicula
      this.UrlsFondos()
      this.EstilizarFondo()
      //this.Menu = React.createRef()
     
      this.PrepararScroll() //Preparamos las funciones para hacer el scroll
     
      
      

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
    DevolverInfoUsuario() //Da la imagen, nombre e info del usuario del comentario
    {
      return(

                <div className="ContieneInfoUsuarioMini">
                  <div className="ContieneMiniImagen">
                    <img/>
                  </div>
                  <div className="ContieneMiniNombrePerfil">
                    <p>Nombre Perfil</p>
                  </div>
                </div>

        );
    }
    Comentarios()
    {
      return(

         <div className="ContenedorComentarios">
          <div className="ContieneComentarios">
            <div className="Comentario">
              <div className="ContieneInfoUsuario">
                {this.DevolverInfoUsuario()}
              </div>
              <div className="ContieneComentarioTexto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <Editor/>
            </div>
          </div>
        </div>

        );

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
                   <Comentarios/>
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


