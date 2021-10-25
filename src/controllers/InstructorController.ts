import { Request, Response } from 'express'
import { InstructorService } from '../services'


export class InstructorController {

  private instructorService: InstructorService

  constructor() {
    this.instructorService = new InstructorService()
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdInstructor = await this.instructorService.createInstructor(body)
    return res.status(200).send(createdInstructor)
  }

  async findAll(req: Request,res: Response) {
    return res.status(200).send(await this.instructorService.findAllInstructors())
  }

  async findById(req: Request,res: Response) {
    const { params } = req
    return res.status(200).send(await this.instructorService.findInstructorById(req.params.uuid))
  }

  async update(req: Request,res: Response) {
    const { body, params } = req
    return res.status(200).send(await this.instructorService.updateInstructor(params.uuid,body))
  }

  async delete(req: Request, res: Response) {
    const { params } = req
    return res.status(200).send(await this.instructorService.deleteInstructor(params.uuid))
  }
}