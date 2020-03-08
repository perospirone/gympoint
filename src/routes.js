const express = require('express')

const router = express.Router()

const SessionController = require('./controllers/SesssionController')
const authMiddleware = require('./middlewares/auth')

router.get('/', authMiddleware. SessionController.index)

module.exports = router