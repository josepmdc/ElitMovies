import React, { Component } from 'react';
import MovieRow from './MovieRow'
import BotonMas from './BotonMas'


export default class InicioPeliculas extends Component {

    constructor(props) {
      
      super(props)
      this.state = {}
      this.ListaPopulares = []
      this.ListaValoradas = []
      this.CargarDatosRecibidos()
      this.PonerSaberMas()

    }
    
    CargarDatosRecibidos() //Cargamos los datos recibidos a las listas

    {
          const results = this.props.datos.Populares.results
  
          results.forEach(movie => {

            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            this.ListaPopulares.push(movieRow)
   
          });
          const results2 = this.props.datos.Valoradas.results
  
          results2.forEach(movie => {

            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            this.ListaValoradas.push(movieRow)
   
          });
 
    }
    PonerSaberMas() //Añadimos al final de cada lista una opción de 'Ver más' para ir al apartado
    {
        const OpcionMas = <BotonMas key = 'Valoradas' dir = 'Valoradas' />
        this.ListaValoradas.push(OpcionMas)
        this.ListaPopulares.push(OpcionMas)
    }
  
  
 

    render() {
      return (
        <div>

            <div className="ContieneTituloInicio">
              <p>Estrenos Populares</p>
            </div>
         
            <div className="ContienePeliculas" >
              {this.ListaPopulares}
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


