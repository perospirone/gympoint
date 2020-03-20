import express from 'express'

import SessionController from './app/controllers/SessionController'
import StudentsController from './app/controllers/Students'

import authMiddleware from './app/middlewares/auth'

const router = express.Router()

router.post('/session', SessionController.store)

router.all(authMiddleware)
router.get('/students', StudentsController.index)
router.post('/students', StudentsController.store)
router.put('/students/:id', StudentsController.update)

module.exports = router
