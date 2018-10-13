'use strict'

const User = require('../models/user')
const services = require('../services')

function signUp (req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Error al crear el usuario: ${ err }`})

        return res.status(200).send({ token: services.createToken(user)})
    })
}

function signIn (req, res) {
    User.find({ email: re.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No existe el usuario' })

        req.user = user
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: services.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}