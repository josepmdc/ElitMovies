import React, { Component } from 'react';

export default class PanelUser extends Component {



    constructor(props) 
    {

        super(props)
        this.state = {
            nombre: "login"
        }
        this.Usuario = null;
        this.EstaConectado();
        this.Abierto = false;
        

    }



    AbrirPanel()
    {
        var f = this.refs.flexa;
        var p = this.refs.Panel;
        if(!this.Abierto)
        {
            f.classList.add("FlexaGirada");
            p.classList.add("PanelAbierto");
            this.Abierto = true;
        } else {
            f.classList.remove("FlexaGirada");
            p.classList.remove("PanelAbierto");
            this.Abierto = false;
        }
    }

    EstaConectado()
    {
      fetch(location.protocol+"//"+window.location.hostname+":"+window.location.port+"/usuario")
      .then(res => res.json())
      .then(


        (result) => {

            var nombre = "";

            if(result.exito==true)
            {
                this.CambiarDeEstado();
                nombre = result.user.name;

            } else {
               this.setState({ nombre: "login" })
            }

          this.setState({ nombre: nombre })
          

        },

        (error) => {
          
        }
      )
  
    }


    

    Retorno()
    {
        return(
                <div className="ContieneOpcionesUsuario" ref = "Panel">
                    <div ref="inicio1" className="ConInicio"><a>Mi Perfil</a></div>
                    <div ref="inicio2" className="ConInicio"><a>Ajustes</a></div>
                    <div ref="inicio3" className="ConInicio"><a href="/logout">Logout</a></div>

                    <div ref="Noinicio1" className="SinInicio"><a href="/register">Registrarse</a></div>
                    <div ref="Noinicio2" className="SinInicio"><a href="/login">Login</a></div>
                </div>
            )
    }

    CambiarDeEstado()
    {
        this.refs.inicio1.classList.remove('ConInicio');
        this.refs.inicio2.classList.remove('ConInicio');
        this.refs.inicio3.classList.remove('ConInicio');

        this.refs.Noinicio1.classList.add('Inexistente');
        this.refs.Noinicio2.classList.add('Inexistente');
    }











   

    

    render() {
        
        return (

            <div className="ContienePanelUsuario"  onClick={this.AbrirPanel.bind(this)}>
                <div className="ContieneAbrirCerrar">
                    <span ref="flexa" className="glyphicon glyphicon-chevron-down flexa"></span>
                </div>
                <div className="ContieneNombreUsuario">
                    <p>{this.state.nombre}</p>
                </div>
                <div className="ContieneImagenPerfilUsuario">
                    <div className="MiniImagenProfile">
                        <img src="/Imagenes/Usuarios/1.png" />
                    </div>
                   
                </div>
                <div>
                    {this.Retorno()}
                </div>
                
            </div>







      );
    }
}

