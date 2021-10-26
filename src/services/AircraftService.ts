import { Aircraft } from '../database/entity';
import { IAircraft } from '../shared/interfaces';

import { getRepository } from 'typeorm';


export class AircraftService {
 
  private aircraftRepository = getRepository(Aircraft)

  async createAircraft(newAircraft: IAircraft) {
    return await this.aircraftRepository.save(newAircraft)
  }

  async findAllAircrafts() {
    return await this.aircraftRepository.find()
  }

  async findAircraftById(id: string) {
    const aircraftFound = await this.aircraftRepository.find({where: {id:id}})
    return aircraftFound
  }

  async updateAircraft(id: string, dataToBeUpdated: IAircraft) {
    const previousData: Aircraft[] = await this.findAircraftById(id)

    return await this.aircraftRepository.update(id, 
      {
        callSign: (!dataToBeUpdated.callSign) 
          ? previousData[0].callSign 
          : dataToBeUpdated.callSign,
        flewHours: (!dataToBeUpdated.flewHours) 
          ? previousData[0].flewHours 
          : dataToBeUpdated.flewHours,
        model: (!dataToBeUpdated.model) 
          ? previousData[0].model 
          : dataToBeUpdated.model,
      }
    )
  }

  async deleteAircraft(id: string) {
    return await this.aircraftRepository.delete(id)
  }
}