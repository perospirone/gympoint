/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'
import User from '../models/User'

class SessionController {
  async store(req, res) {
    const { name, email, password } = req.body
  }
}

export default new SessionController()
