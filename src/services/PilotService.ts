import { ErrorMessages, SuccessfulMessages, IPilot } from '../shared';
import { Pilot } from '../database/entity'
import { getRepository } from 'typeorm'
import { createPatchPilotObject, createPostPilotObject, ServerError } from './utils';


export class PilotService {

  private pilotRepository = getRepository(Pilot)

  async findAllPilots() {

    const pilots = await this.pilotRepository.find()

    if(!pilots) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(pilots.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_PILOT_TABLE, 400)
    }
    return pilots
  }

  async findPilotById(id: string) {

    const pilot = await this.pilotRepository.find({where: {id: id}})
    
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
      .save(await createPostPilotObject(newPilot))
  }

  async updatePilot(id: string, dataToBeUpdated: IPilot) {
    
    if(!dataToBeUpdated){
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.pilotRepository
      .update(id, await createPatchPilotObject(id, dataToBeUpdated))
  }

  async deletePilot(id: string) {

    const deleteResult = await this.pilotRepository.delete(id)

    if(!deleteResult) {
      throw new ServerError(ErrorMessages.UNKNOWN_DELETE_ERROR, 400)
    }

    if(deleteResult.affected === 0) {
      throw new ServerError(ErrorMessages.ID_DELETE_ERROR, 400)
    }

    return SuccessfulMessages.PILOT_DELETE_SUCCESSFUL

  }
}