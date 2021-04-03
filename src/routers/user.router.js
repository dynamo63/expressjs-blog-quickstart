const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { subscribeNewsletter, getHomePage } = require('../controllers')

// Page D'accueil
router.get('/', getHomePage)

// Affichage de la page inscription
router.get('/inscription', (_req, res) => { res.render("sign_in.njk") })

router.post('/inscription', 
    // Verication de l'email
    body('email','Cet email n\'est pas correcte').isEmail(),
    // Verification du nom : Au moins 3 caractere
    body('name', 'Ce nom est trop court').isLength({ min: 3 }),
    // Inscription aux newsletter
    subscribeNewsletter
)

module.exports = router