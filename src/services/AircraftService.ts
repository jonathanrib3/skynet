import { Aircraft } from '../database/entity';
import { IAircraft } from '../shared/interfaces';

import { getRepository } from 'typeorm';


export class AircraftService {
 
  private aircraftRepo = getRepository(Aircraft)
  

  async create(newAircraft: IAircraft) {
    return await this.aircraftRepo.save(newAircraft)
  }

  async findAllAircrafts() {
    return await this.aircraftRepo.find()
  }

}