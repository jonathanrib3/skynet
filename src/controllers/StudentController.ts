import { Request, Response } from 'express'
import { StudentService } from '../services'


export class StudentController {

  private studentService: StudentService

  constructor() {
    this.studentService = new StudentService()
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdstudent = await this.studentService.createStudent(body)
    return res.status(200).send(createdstudent)
  }

  async findAll(req: Request,res: Response) {
    return res.status(200).send(await this.studentService.findAllStudents())
  }

  async findById(req: Request,res: Response) {
    return res.status(200).send(await this.studentService.findStudentById(req.params.id))
  }
}