import { Aircraft } from '../database/entity';
import { ErrorMessages, IAircraft } from '../shared';
import { DeleteResult, getRepository } from 'typeorm';
import { ServerError, createPatchAircraftObject } from './utils';

export class AircraftService {
 
  private aircraftRepository = getRepository(Aircraft)

  async findAllAircrafts() {

    const aircrafts = await this.aircraftRepository
      .find()
      .catch(error => console.log(error))

    if(!aircrafts) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(aircrafts.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_AIRCRAFT_TABLE, 400)
    }

    return aircrafts
  }

  async findAircraftById(id: string) {

    const aircraft = await this.aircraftRepository
      .find({where: {id:id}})
      .catch(error => console.log(error))

    if(!aircraft) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(aircraft.length === 0) {
      throw new ServerError(ErrorMessages.AIRCRAFT_NOT_FOUND, 400)
    }

    return aircraft
  }

  async createAircraft(newAircraft: IAircraft) {

    if(!newAircraft) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.aircraftRepository
      .save(newAircraft)
      .catch(error => console.log(error))
  }

  async updateAircraft(id: string, dataToBeUpdated: IAircraft) {

    if(!dataToBeUpdated){
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.aircraftRepository
      .update(id, await createPatchAircraftObject(id, dataToBeUpdated))
      .catch(error => console.log(error))
  }

  async deleteAircraft(id: string) {

    const deleteResult = await this.aircraftRepository
      .delete(id)
      .catch(error => console.log(error)) as DeleteResult

    if(!deleteResult) {
      throw new ServerError(ErrorMessages.UNKNOWN_DELETE_ERROR, 400)
    }

    if(deleteResult.affected === 0) {
      throw new ServerError(ErrorMessages.ID_DELETE_ERROR, 400)
    }
    
    return deleteResult
  }
}