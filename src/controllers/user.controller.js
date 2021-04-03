const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')
const { User } = require('../models')


const subscribeNewsletter = (req, res) => {
    const errorsForms = validationResult(req)
    if (!errorsForms.isEmpty()) {
        return res.render('sign_in.njk', { errors: errorsForms.array() })
    }

    // Creation d'un compte utilisateur pour les newsletter
    User.create({
        name: req.body.name,
        email: req.body.email
    }).then(() => {
        return res.redirect('/posts')
    }).catch(() => {
        return res.render('sign_in.njk', { errors: [{ msg: "Database Error" }] })
    })
}

const getHomePage = (_req, res) => {

    console.log("Today is :" + Date())

    const context = {
        title: "Bienvenue sur mon blog Nodejs"
    }
    res.render('index.njk', context)
}

module.exports = {
    subscribeNewsletter,
    getHomePage
}