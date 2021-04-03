const { Router } = require('express')
const router = Router()
const {  getAllNotes, addLikeToNote } = require('../controllers')

// Declaration des routes 
router.get('/', getAllNotes)
router.post('/like/:idNote', addLikeToNote)

module.exports = router