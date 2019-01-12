import React, { Component } from 'react';




export default class Buscador extends Component {



    constructor(props) 
    {

    super(props)
   

    }

    ImagenNula()
    {
      if(this.props.datos.profile_path == null)
      {
        this.props.datos.profile_path = "/Imagenes/Usuarios/1.png"
      } else {
          this.props.datos.profile_path = "https://image.tmdb.org/t/p/w92/"+this.props.datos.profile_path
      }
    }

    AbrirBuscador()
    {

    }


   

    

    render() {
        
        return (

            <div>
                <div ref ="ContBuscador" className="ContieneBuscador" onClick={this.AbrirBuscador.bind(this)}>
                  <span class="glyphicon glyphicon-search"></span>
                  <input id="searchBar" placeholder="Buscar"  autoComplete="off" type="text"></input>
                </div>
            </div>







      );
    }
}

