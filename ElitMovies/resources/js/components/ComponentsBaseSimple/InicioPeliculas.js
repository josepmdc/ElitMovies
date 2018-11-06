import React, { Component } from 'react';
import MovieRow from './MovieRow'


export default class InicioPeliculas extends Component {

    constructor(props) {
      
      super(props)
      this.state = {}
      this.ListaPopulares = []
      this.CargarDatosRecibidos()

    }
    
    CargarDatosRecibidos() 
    {
      const results = this.props.datos.Populares.results
      
          
          results.forEach(movie => {

            const movieRow = <MovieRow key = { movie.id } movie = { movie } />
            this.ListaPopulares.push(movieRow)
   
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
        </div>
          
  
       
      );
    }
}


