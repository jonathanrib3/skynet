import { IPilot } from '../shared/interfaces';
import { Pilot } from '../database/entity'
import { getRepository } from 'typeorm'

export class PilotService {

  private pilotRepository = getRepository(Pilot)

  async findAllPilots() {
    return await this.pilotRepository.find()
  }

  async findPilotById(id: string) {
    return await this.pilotRepository.find({where: {id:id}})
  }

  async createPilot(newPilot: IPilot) {
    return (!newPilot)
    ? null
    : await this.pilotRepository.save(newPilot)
  }

  async updatePilot(updatedData: IPilot) {
    return await this.pilotRepository.update(updatedData.id, updatedData)
  }
}