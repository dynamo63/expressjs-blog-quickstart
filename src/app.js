const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const bodyParser = require('body-parser')
const isProd = process.env.NODE_ENV === 'PROD'
const PORT =  process.env.PORT || 3000
const morgan = require('morgan')

// Connection a la base de donnees 
require('./config/database.config')

// Importation des routes
const userRouter = require('./controllers/user.controller')
const postRouter = require('./controllers/post.controller')

// Parsing des requetes
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Morgan Config
app.use(morgan(isProd ? 'combined' : 'dev'))

// nunjucks config
nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app,
    watch: !isProd
})

// Configuration des fichiers static
app.use('/static',express.static('public'))

// Insertions des routes
app.use('/', userRouter)
app.use('/posts', postRouter)

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Mode ${isProd ? "Production": "Developement" }`)
    console.log(`Server running on http://localhost:${PORT}/`)
})