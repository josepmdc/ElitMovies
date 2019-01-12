import React, { Component } from 'react';




export default class Buscador extends Component {



    constructor(props) 
    {

    super(props)
   

    }



    AbrirBuscador() 
    {

      //CENTRAMOS EL BUSCADOR
      var element = this.refs.ContBuscador;

      var w = (window.innerWidth);//anchura
      var h = (window.innerHeight);//altura

      var y = element.offsetTop;//x
      var x = element.offsetLeft;//y

      var anchura = element.offsetWidth;

      var medioReal = x+(anchura/2);
      this.Oscurecer();

      var Posx = (w-(w/2)-(anchura/2))-x;
      var PosY = (h-(0.85*h))
      this.refs.input.style.width="100%";
      element.style.transform = "translateX("+Posx+"px) translateY("+PosY+"px) scale(1.5)";


    }
    //Div que oscureze el fondo
    Oscurecer()
    {
      var fondo = this.refs.Oscuridad;
      fondo.classList.add('Amplio');
      setTimeout(
        function()
        {

          fondo.classList.add('Opaco');
        }

        , 100);
      
    }

    //Cerramos el oscurezido del fondo y el buscador
    CerrarBuscador()
    {
      var element = this.refs.ContBuscador;
      element.style.transform = "";
      var fondo = this.refs.Oscuridad;
      fondo.classList.remove('Opaco');

      setTimeout(
        function()
        {

          fondo.classList.remove('Amplio');
        }

        , 800);
     

    }




   

    

    render() {
        
        return (

            <div>
                <div className="Oscuridad" ref="Oscuridad" onClick={this.CerrarBuscador.bind(this)} ></div>
                <div ref ="ContBuscador" className="ContieneBuscador" onClick={this.AbrirBuscador.bind(this)}>
                  <span className="glyphicon glyphicon-search"></span>
                  <input id="searchBar" ref = "input" placeholder="Buscar"  autoComplete="off" type="text"></input>
                </div>
            </div>



      );
    }
}

