import { ClassService } from '../services';
import { Request, Response } from 'express'


export class ClassController {

  private classService: ClassService

  constructor() {
    this.classService = new ClassService()
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdClass = await this.classService.createClass(body)
    return res.status(200).send(createdClass)
  }

  async findAll(req: Request,res: Response) {
    return res.status(200).send(await this.classService.findAllClasses())
  }

  async findById(req: Request,res: Response) {
    const { params } = req
    return res.status(200).send(await this.classService.findClassById(params.uuid))
  }

  async update(req: Request,res: Response) {
    const { body } = req
    return res.status(200).send(await this.classService.updateClass(body))
  }
}