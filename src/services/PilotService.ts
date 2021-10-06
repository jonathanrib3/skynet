import { IPilot } from './../shared/interfaces/IPilot';
import { Pilot } from './../database/entity/Pilot'
import { getRepository } from 'typeorm'

export default class PilotService {

  private pilotRepository = getRepository(Pilot)

  async getAllPilots() {
    return await this.pilotRepository.find()
  }

  async getPilotById(id: any) {
    return await this.pilotRepository.findByIds(id)
  }

  async createPilot(newPilot: IPilot) {
    return (!newPilot)
    ? null
    : await this.pilotRepository.save(newPilot)
  }
}