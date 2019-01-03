
import React, { Component } from 'react';
import MovieRow             from './MovieRow'
import Comentario           from './Comentario.js'
import Editor               from '../Editor.js'



export default class Comentarios extends Component {

    constructor(props) 
    {
      super(props)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.ListaComentarios = []
      const movieRow = <Comentario key= '1' />
      //this.ListaComentarios.push(movieRow)
      
      this.PrepararDatos()


      
      

    }

    PrepararDatos() //Cargamos las opiniones por el Id de la pelicula
    {
      fetch("http://127.0.0.1:8000/api/Comentarios?IdPelicula="+this.props.idPelicula+"&page=1")
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




    CargarComentarios()
    {
      const { error, isLoaded, items } = this.state;
      return (
        <div>
          {items.map(item => (
              <div >
                
                {item}
                

              </div>
            ))}
        </div>
        );
    }


    

    CargarEditorComentario()//Vemos si el usuario NO ha añadido una reseña de esta pelicula, en tal caso ponemos el editor, en caso contrario mostramos la reseña del usuario
    {
      return(

          <div className = "ContieneCommentPropio" onClick={this.ComprobarInicio.bind(this)}>
            <Editor/>
          </div>

        )
    }



    ComprobarInicio() //Comprobamos que haya una sesión iniciada 
    {
      alert('Debes iniciar sesión')
    }






    render() {
       
      return(
        <div>

          {this.CargarEditorComentario()}
          {this.CargarComentarios()}
          
          
        </div>


           
        
        );
      
      
    }
}


