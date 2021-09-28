import { Aircraft } from './../database/entity/Aircraft';
import { IAircraft } from './../shared/models/interfaces/IAircraft';

import { getRepository } from 'typeorm';


export default class AircraftService {
 
  private aircraftRepo = getRepository(Aircraft)
  

  async create(newAircraft: IAircraft) {
    return await this.aircraftRepo.save(newAircraft)
  }

  async findAllAircrafts() {
    return this.aircraftRepo.find()
  }

}