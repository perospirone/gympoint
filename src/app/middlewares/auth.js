import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

export default async (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) return res.status(401).json({ error: 'token not' })

  const [, token] = auth.split(' ')

  try {
    await jwt.verify(token, authConfig.secret)

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'token not found' })
  }
}
