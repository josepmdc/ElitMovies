
import React, { Component } from 'react';
import MovieRow             from './MovieRow'
import Editor               from '../Editor.js'
import Comentario           from './Comentario.js'



export default class Comentarios extends Component {

    constructor(props) 
    {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      
      

    }





    DevolverInfoUsuario() //Da la imagen, nombre e info del usuario del comentario
    {
      return(

                <div className="ContieneInfoUsuarioMini">
                  <div className="ContieneMiniImagen">
                    <img src='/Imagenes/Usuarios/1.png'/>
                  </div>
                  <div className="ContieneMiniNombrePerfil">
                    <p>Nombre Perfil de id {this.props.datos.id}</p> 
                  </div>
                </div>

        );
    }


    DevolverOpciones()  
    {
      return(

          <div className="MicroopCiones">
            <div>
              <p>123</p>
              <button><span className="icono glyphicon glyphicon-thumbs-up"></span></button>
            </div>
            <div>
              <p>900</p>
              <button><span className="icono glyphicon glyphicon-thumbs-down"></span></button>
            </div>
            <div>
              <button><p>Comentar</p></button>
            </div>
            <div>
              <button onClick={this.CargarSubComentarios.bind(this)}><p>Ver Comentarios</p></button>
            </div>
            <div className="ContieneCargador" >
              <div className="loader" ref="Cargador"></div>
            </div>
          </div>

        )
    }
    CargarSubComentarios(e) //Cargamos los subcomentarios de este comentario
    {
      this.PonerCargador() //Añadimos un loader sencillo que indique que se estan cargando los datos

      fetch("http://127.0.0.1:8000/api/SubComentarios?IdComentario="+this.props.datos.id+"&IdPelicula=155&page=1")
      .then(res => res.json())
      .then(


        (result) => {
          var ListadoComemtarios = [];
          const resultados = result.data;

          resultados.forEach(coment => {
            
            const comentarioIn = <Comentario key= {coment.id} datos = {coment} />
            ListadoComemtarios.push(comentarioIn)

          });

          this.setState({
            items: ListadoComemtarios
          });
          //alert('cargado');
          this.CargaSubComentarios();
          this.QuitarCargador() //Añadimos un loader sencillo que indique que se estan cargando los datos
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


    PonerCargador()//Añade loader pequeño
    {
      var contiene  = this.refs.Cargador;
      contiene.classList.add('Visible');

    }
    QuitarCargador()
    {
      var contiene  = this.refs.Cargador;
      contiene.classList.remove('Visible');
    }




   


    CargaSubComentarios()
    {
       const { error, isLoaded, items } = this.state;
      return(

          <div className="ContieneSubComentarios">
                {items.map(item => (
              <div >
                
                {item}
                

              </div>
            ))}
          </div>

        )
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
              <div className="ContieneTituloComentario">
                <p>{this.props.datos.titulo}</p>
              </div>
              <div className="ContieneComentarioTexto">
                <p>
                  {this.props.datos.contenido}
                </p>
              </div>
              <div className="ContieneOpcionesComentario">
                {this.DevolverOpciones()}
              </div>
             
            </div>

            {this.CargaSubComentarios()}


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


