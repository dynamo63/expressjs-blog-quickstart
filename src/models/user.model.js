const mongoose = require('mongoose')
const { Schema } = require('mongoose')

// Creation du Schema de notre model Utilisateur
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    }
})

// Creation et exportation du modele
module.exports = mongoose.model('User', UserSchema)