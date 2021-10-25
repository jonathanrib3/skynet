import { Request, Response } from 'express'
import { AircraftService } from '../services'


export class AircraftController {

  private aircraftService: AircraftService

  constructor() {
    this.aircraftService = new AircraftService()
    
  }

  async create(req: Request, res: Response) {
    const { body } = req
    const createdAircraft = await this.aircraftService.createAircraft(body)
    return res.status(200).send(createdAircraft)
  }

  async findAll(req: Request, res: Response) {
    return res.status(200).send(await this.aircraftService.findAllAircrafts())
  }

  async findById(req: Request, res: Response) {
    const { params } = req
    console.log(params)
    return res.status(200).send(await this.aircraftService.findAircraftById(params.uuid))
  }

  async update(req: Request, res: Response) {
    const { body, params } = req
    return res.status(200).send(await this.aircraftService.updateAircraft(params.uuid,body))
  }

  async delete(req: Request, res: Response) {
    const { params } = req
    return res.status(200).send(await this.aircraftService.deleteAircraft(params.uuid))
  }
}