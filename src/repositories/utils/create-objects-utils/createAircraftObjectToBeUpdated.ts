import { Aircraft } from "database/entity";
import { getRepository } from "typeorm";
import { ErrorMessages, IAircraft } from "shared";
import ServerError from "server-error/ServerError";


const aircraftRepository = getRepository(Aircraft)

async function createAircraftObjectToBeUpdated(id: string, dataToBeUpdated: IAircraft) {
  
    const previousData: Aircraft[] = await aircraftRepository.find({where: {id: id}})

    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.AIRCRAFT_NOT_FOUND, 400)
    }
      
    const updateAircraft =   
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

    return updateAircraft
}

export default createAircraftObjectToBeUpdated