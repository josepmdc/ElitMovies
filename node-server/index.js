'use strict'

const mongoose = require('mongoose')
const app = require('./app')

const config = require('./config')

mongoose.connect(config.db, (error, res) => {
    if(error) 
        console.log('Error: No se ha podido connectar con la BBDD');
    console.log('Connexión a la BBDD establecida')
})

app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
})