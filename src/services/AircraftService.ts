import { Aircraft } from '../database/entity';
import { IAircraft } from '../shared/interfaces';

import { getRepository } from 'typeorm';
import { AircraftUtils } from './utils';


export class AircraftService {
 
  private aircraftRepository = getRepository(Aircraft)
  private aircraftUtils = new AircraftUtils()

  async createAircraft(newAircraft: IAircraft) {
    return await this.aircraftRepository.save(newAircraft)
  }

  async findAllAircrafts() {
    return await this.aircraftRepository.find()
  }

  async findAircraftById(id: string) {
    const aircraftFound = await this.aircraftRepository.find({where: {id:id}})
    const aircraftObject: IAircraft = this.aircraftUtils.formatAircraft(aircraftFound[0])
     /*{
      id: aircraftFound[0].id,
      callSign: aircraftFound[0].callSign,
      flewHours: aircraftFound[0].flewHours,
      model: aircraftFound[0].model 
    }*/
    return aircraftObject
  }

  async updateAircraft(id: string, dataToBeUpdated: IAircraft) {
    const previousData: IAircraft = await this.findAircraftById(id)

    return await this.aircraftRepository.update(id, 
      {
        callSign: (!dataToBeUpdated.callSign) ? previousData.callSign : dataToBeUpdated.callSign,
        flewHours: (!dataToBeUpdated.flewHours) ? previousData.flewHours : dataToBeUpdated.flewHours,
        model: (!dataToBeUpdated.model) ? previousData.model : dataToBeUpdated.model,
      }
    )
  }

  async deleteAircraft(id: string) {
    return await this.aircraftRepository.delete(id)
  }
}