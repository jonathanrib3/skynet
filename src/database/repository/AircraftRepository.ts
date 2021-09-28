import { IAircraft } from './../../shared/models/interfaces/IAircraft';
import { Aircraft } from './../entity/Aircraft';
import { Repository } from "typeorm";




export default class AircraftRepository extends Repository<Aircraft> {
 
  async createAircraft(newAircraft: IAircraft) {
    return await this.save(newAircraft)
  }
  async findAll() {
    return await this.find()
  }
  async findById(aircraftId: any) {
    return await this.findByIds(aircraftId)
  }
  
}



