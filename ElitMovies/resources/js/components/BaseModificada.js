import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Parte from './Parte'
import Buscador from './Buscador'
import $ from 'jquery'

//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';






class BaseModificada extends Component {
    

    constructor(props) 
    {
        super(props);
        //Hasta aqui los datos pasados eran en string, los pasamos a array a variable datos
        this.datos = JSON.parse(this.props.data);
        //alert(this.datos['Peliculas']['results']);
    
     }

	/* static propTypes = {
    children: PropTypes.object.isRequired

  }; */
  
    render() {
        return (
            <div >
           
            <Header title="Título de la web" items = 'holaaala' />

             <Buscador datos={this.datos}/>

            </div>
        );
    }
}



export default BaseModificada;