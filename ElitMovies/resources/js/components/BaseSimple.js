import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import InicioPeliculas from './ComponentsBaseSimple/InicioPeliculas'
import $ from 'jquery'

//components
import Header   from './Global/Header';
import Content  from './Global/Content';
import Footer   from './Global/Footer';
import Menu     from './Menu';






class BaseSimple extends Component {
    
    

    constructor(props) 
    {
        super(props);
        //Hasta aqui los datos pasados eran en string, los pasamos a array a variable datos
        
        //alert(this.datos['Peliculas']['results']);
    
     }

	/* static propTypes = {
    children: PropTypes.object.isRequired

  }; */
  
    render() {
        return (
            <div >
           
            
           
            <InicioPeliculas/>

            </div>
        );
    }
}



export default BaseSimple;