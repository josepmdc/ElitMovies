import React, { Component } from 'react';
import MovieRow from './MovieRow'


export default class InicioPeliculas extends Component {

    constructor(props) {
      
      super(props)
      this.state = {}
      this.ListaPopulares = []
      this.ListaValoradas = []
      this.CargarDatosRecibidos()

    }
    
    CargarDatosRecibidos() 
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


