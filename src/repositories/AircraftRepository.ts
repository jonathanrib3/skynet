import { Aircraft } from '../database/entity';
import { IAircraft } from '../shared';
import { getRepository } from 'typeorm';


export default class AircraftRepository {
 
  private aircraftRepository = getRepository(Aircraft)

  async findAllAircrafts(take: number, skip: number) {

    const [ result, total ] = await this.aircraftRepository.findAndCount({
      take: take,
      skip: skip
    })

    return {
      aircrafts: result,
      count: total
    }
  }
  

  async findAircraftById(take:number, skip:number, id: string) {

    const [result, total] = await this.aircraftRepository.findAndCount({
      where: { id: id },
      take: take,
      skip: skip
    })

    return {
      aircraft: result,
      count: total
    }
  }

  async createAircraft(newAircraft: IAircraft) {

    return await this.aircraftRepository.save(newAircraft)
  }

  async updateAircraft(id: string, dataToBeUpdated: IAircraft) {

    return await this.aircraftRepository.update(id, dataToBeUpdated)
  }

  async deleteAircraft(id: string) {

    const deleteResult = await this.aircraftRepository.delete(id)

    return deleteResult
  }
}