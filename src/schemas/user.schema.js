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

module.exports = UserSchema