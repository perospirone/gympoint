const Student = require('../models/students')

class StudentController {
  async index(req, res) {
    const student = await Student.findAll()

    return res.json(student)
  }

  async store(req, res) {
    const student = await req.body

    const user = await Student.create({name: "dsasd"})

    return res.json(user)
    //return res.json(Student)
  }
}

export default new StudentController()
