const path = require('path')
// Configuration des variables d'environnement
require('dotenv').config({
    path: path.resolve(process.cwd(), '.test.env')
})

const { app, server } = require('../app')
const request = require('supertest')

// Connection a la base de donnees
const db = require('../config/database.config')


describe("GET '/' URL", () => {
    
    it('Expected status code 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })

})

describe("POST /inscription", () => {

    it('Subscribe Success Views', (done) => {
        const User = {
            name: 'dynamo',
            email: 'dynamo@yopmail.com'
        }

        request(app)
            .post('/inscription')
            .send(User)
            .set('Accept', 'application/json')
            .expect(302, done)
    })

})

afterEach(async () => {
    // Suppression de la base de donnees de test
    db.dropDatabase()
    // fermeture du serveur pour permettre de relancer les tests correctement
    server.close()
})