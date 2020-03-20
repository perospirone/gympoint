import Student from '../models/students'

class StudentController {
  async index(req, res) {
    const student = await Student.findAll()

    return res.json(student)
  }

  async store(req, res) {
    const user = await Student.create(req.body)

    return res.json(user)
  }

  async show(req, res) {
    const student = await Student.findByPk(req.params.id)

    return res.json(student)
  }

  async update(req, res) {
    await Student.update(req.body, {
      where: { id: req.params.id },
    })

    const student = await Student.findByPk(req.params.id)

    return res.json(student)
  }
}

export default new StudentController()
