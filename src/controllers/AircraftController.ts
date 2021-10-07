import { Request, Response } from 'express'
import { AircraftService } from '../services'


export class AircraftController {

  private aircraftService: AircraftService

  constructor() {
    this.aircraftService = new AircraftService()
    
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdAircraft = await this.aircraftService.create(body)
    return res.status(200).send(createdAircraft)
  }

  async findAll(req: Request,res: Response) {
    
    return res.status(200).send(await this.aircraftService.findAllAircrafts())
  }
}