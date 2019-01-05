import React, { Component } from 'react';

export default class Actor extends Component {



    constructor(props) 
    {

    super(props)
    this.ImagenNula()


    

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












   

    

    render() {
        
        return (

            <div>
                <div className="Actor">
                  <div className="ContieneImagenActor">
                    <img src={this.props.datos.profile_path}/>
                  </div>
                  <div className="ContieneInfoActor">
                    <div className="ContieneNombreReal">
                      <p>{this.props.datos.name}</p>
                    </div>
                    <div className="ContieneNombreFict">
                      <p>({this.props.datos.character})</p>
                    </div>
                  </div>
                </div>
            </div>







      );
    }
}

