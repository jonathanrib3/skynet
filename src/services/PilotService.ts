import { ErrorMessages, IPilot } from '../shared';
import { Pilot } from '../database/entity'
import { DeleteResult, getRepository } from 'typeorm'
import { createPatchPilotObject, ServerError } from './utils';


export class PilotService {

  private pilotRepository = getRepository(Pilot)

  async findAllPilots() {

    const pilots = await this.pilotRepository
      .find()
      .catch(error => console.log(error))

    if(!pilots) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(pilots.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_PILOT_TABLE, 400)
    }
    return pilots
  }

  async findPilotById(id: string) {

    const pilot = await this.pilotRepository
      .find({where: {id: id}})
      .catch(error => console.log(error))
    
    if(!pilot) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(pilot.length === 0) {
      throw new ServerError(ErrorMessages.PILOT_NOT_FOUND, 400)
    }
      
    return pilot
  }

  async createPilot(newPilot: IPilot) {

    if(!newPilot) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.pilotRepository
      .save(newPilot)
      .catch(error => console.log(error))
  }

  async updatePilot(id: string, dataToBeUpdated: IPilot) {
    
    return await this.pilotRepository
      .update(id, await createPatchPilotObject(id, dataToBeUpdated))
  }

  async deletePilot(id: string) {

    const deleteResult = await this.pilotRepository.delete(id)
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