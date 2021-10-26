import { Request, Response } from 'express'
import { PilotService } from '../services'


export class PilotController {

  private pilotService: PilotService

  constructor() {
    this.pilotService = new PilotService()
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdpilot = await this.pilotService.createPilot(body)
    return res.status(200).send(createdpilot)
  }

  async findAll(req: Request,res: Response) {
    return res.status(200)
      .send(await this.pilotService.findAllPilots())
  }

  async findById(req: Request,res: Response) {
    const { params } = req
    return res.status(200)
      .send(await this.pilotService.findPilotById(params.uuid))
  }

  async update(req: Request,res: Response) {
    const { body, params } = req
    return res.status(200)
      .send(await this.pilotService.updatePilot(params.uuid,body))
  }

  async delete(req: Request, res: Response) {
    const { params } = req
    return res.status(200)
      .send(await this.pilotService.deletePilot(params.uuid))
  }
}