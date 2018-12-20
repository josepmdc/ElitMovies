
import React, { Component } from 'react';
import MovieRow             from './MovieRow'
import Editor               from '../Editor.js'



export default class Comentarios extends Component {

    constructor(props) 
    {
      super(props)
      

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
        <div>
          {this.Comentarios()}
        </div>


           
        
        );
      
      
    }
}


