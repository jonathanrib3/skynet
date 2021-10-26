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

  async updatePilot(id: string, dataToBeUpdated: IPilot) {
    const previousData: Pilot[] = await this.findPilotById(id)

    return await this.pilotRepository.update(id, 
      {
        address: (!dataToBeUpdated.address) 
          ? previousData[0].address 
          : dataToBeUpdated.address,
        age: (!dataToBeUpdated.age) 
          ? previousData[0].age 
          : dataToBeUpdated.age,
        email: (!dataToBeUpdated.email) 
          ? previousData[0].email 
          : dataToBeUpdated.email,
        license: (!dataToBeUpdated.license) 
          ? previousData[0].license 
          : dataToBeUpdated.license,
        name: (!dataToBeUpdated.name) 
          ? previousData[0].name 
          : dataToBeUpdated.name,
        password: (!dataToBeUpdated.password) 
          ? previousData[0].password 
          : dataToBeUpdated.password,
        registration: (!dataToBeUpdated.registration) 
          ? previousData[0].registration 
          : dataToBeUpdated.registration
      }
    )
  }

  async deletePilot(id: string) {
    return await this.pilotRepository.delete(id)
  }
}