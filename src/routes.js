import express from 'express'

// eslint-disable-next-line no-unused-vars
// import SessionController from './app/controllers/SessionController'
import StudentsController from './app/controllers/Students'

// import authMiddleware from './app/middlewares/auth'

const router = express.Router()

// router.all(authMiddleware)
router.get('/students', StudentsController.index)
router.post('/students', StudentsController.store)

module.exports = router
