import React, { Component } from 'react';
import MovieRow from './MovieRow'
import BotonMas from './BotonMas'


export default class InicioPeliculas extends Component {

    constructor(props) {
      
      super(props)
      this.state = {}
      this.ListaPopulares = []
      this.ListaValoradas = []
      this.PrepararDatos();
      //this.CargarDatosRecibidos()
      //this.PonerSaberMas()

    }

    PrepararDatos() //Cargamos las opiniones por el Id de la pelicula
    {
      fetch(location.protocol+"//"+window.location.hostname+":"+window.location.port+"/api/populares")
      .then(res => res.json())
      .then(


        (result) => {

          var movies = [];
          const resultados = result.results;

          resultados.forEach(coment => {
            
            


            const movieRow = <MovieRow key = { coment.id } movie = { coment } />
            movies.push(movieRow)
            

          });
          /*
          this.setState({
            items: ListadoComemtarios
          });
          */
          const OpcionMas = <BotonMas key = 'Valoradas' dir = 'Valoradas' />
          movies.push(OpcionMas);
          this.setState({ rows: movies })
          this.QuitarCargadorPeliculas();
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
    

    PonerSaberMas() //Añadimos al final de cada lista una opción de 'Ver más' para ir al apartado
    {
        const OpcionMas = <BotonMas key = 'Valoradas' dir = 'Valoradas' />
        var Listado = this.state.rows;
        Listado.push(OpcionMas);
         /*this.setState({ rows: Listado })*/
    }
    CargadorPeliculas()
    {
      return (

        <div className="ContienePeliculasFantasma" ref="CargadorPel">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        )
    }

    QuitarCargadorPeliculas()
    {
      var pelis = this.refs.CargadorPel;
      pelis.classList.add('Quitar');
    }
  
  
 

    render() {
      return (
        <div>
           

            <div className="ContieneTituloInicio">
              <p>Estrenos Populares</p>
            </div>
           {this.CargadorPeliculas()}
            <div className="ContienePeliculas" >
              {this.state.rows}
            </div>
             <div className="ContieneTituloInicio">
              <p>Las mejor Valoradas</p>
            </div>
         
            <div className="ContienePeliculas" >
              {this.ListaValoradas}
            </div>
        </div>
          
  
       
      );
    }
}


