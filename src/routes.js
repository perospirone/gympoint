const express = require('express')

const router = express.Router()

const SessionController = require('./app/controllers/SessionController')
const StudentsController = require('./app/controllers/Students')

const authMiddleware = require('./middlewares/auth.js')


router.use(authMiddleware);
router.get('/', StudentsController.index)
router.post('/', StudentsController.create)


module.exports = router