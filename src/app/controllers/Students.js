import Student from '../models/students'

class StudentController {
  async index(req, res) {
    const student = await Student.findAll()

    return res.json(student)
  }

  async store(req, res) {
    const student = req.body

    const user = await Student.create(student)
    return res.json(user)
  }
}

export default new StudentController()
