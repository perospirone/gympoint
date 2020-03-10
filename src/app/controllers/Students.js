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
    //return res.json(Student)
  }
}

export default new StudentController()
