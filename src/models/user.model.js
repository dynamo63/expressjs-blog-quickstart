const mongoose = require('mongoose')
const { UserSchema } = require('../schemas')


const Usermodel = mongoose.model('User', UserSchema)
// Creation et exportation du modele
module.exports = Usermodel