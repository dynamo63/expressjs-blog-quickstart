const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1/blog'

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => {
    console.error('MongoDB Connection Error')
})

db.once('open', function() {
    console.log('Connected to database:' + DATABASE_URL)
})

db.once('disconnected', () => {
    console.log('Database Disconnected')
})

db.once('close', () => {
    console.log('Database closed')
})

module.exports = db