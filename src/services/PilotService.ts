import { IPilot } from '../shared/interfaces';
import { Pilot } from '../database/entity'
import { getRepository } from 'typeorm'

export class PilotService {

  private pilotRepository = getRepository(Pilot)

  async findAllPilots() {
    return await this.pilotRepository.find()
  }

  async findPilotById(id: any) {
    return await this.pilotRepository.findByIds(id)
  }

  async createPilot(newPilot: IPilot) {
    return (!newPilot)
    ? null
    : await this.pilotRepository.save(newPilot)
  }
}