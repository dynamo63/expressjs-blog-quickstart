const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const User = require('../models/user.model')

router.get('/', (_req, res) => {

    console.log("Today is :" + Date())

    const context = {
        title: "Bienvenue sur mon blog Nodejs"
    }
    res.render('index.njk', context)
})

router.get('/inscription', (_req, res) => {
    // 
    res.render("sign_in.njk")
})

router.post('/inscription', 
        // Verication de l'email
        body('email','Cet email n\'est pas correcte').isEmail(),
        // Verification du nom : Au moins 3 caractere
        body('name', 'Ce nom est trop court').isLength({ min: 3 }),
        (req, res) => {
            const errorsForms = validationResult(req)
            if (!errorsForms.isEmpty()) {
                return res.render('sign_in.njk', { errors: errorsForms.array() })
            }

            // Creation d'un compte utilisateur pour les newsletter
            User.create({
                name: req.body.name,
                email: req.body.email
            }).then(user => {
                console.log(user)
                return res.redirect('/posts')
            }).catch(() => {
                return res.render('sign_in.njk', { errors: [{ msg: "Database Error" }] })
            })


})

module.exports = router