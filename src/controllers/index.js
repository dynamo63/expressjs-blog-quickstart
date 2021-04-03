const { getAllNotes, addLikeToNote } = require('./post.controller')
const { subscribeNewsletter, getHomePage } = require('./user.controller')

module.exports = {
    getAllNotes,
    addLikeToNote,
    subscribeNewsletter,
    getHomePage
}