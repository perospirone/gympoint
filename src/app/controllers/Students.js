'use strict'

const Student = require('../models/students')

class StudentController {
	async index (req, res) {
		let student = await Student.find({})

		return res.json({ student })
	}
	async create (req, res) {
		let student = await Student.create(req.body)

		return res.json({ student })
	}
}

export default new StudentController
