const express = require('express')
const router = express.Router()
const { getSessionById, getSessionSalute } = require('./controllers/session')

router.get('/session/by/:id', getSessionById)

module.exports = router