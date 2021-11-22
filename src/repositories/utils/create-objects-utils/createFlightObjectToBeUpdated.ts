import { Aircraft, Associate, Flight } from "database/entity";
import { getRepository } from "typeorm";
import { ErrorMessages, IFlight, IFlightToBeUpdated } from "shared";
import ServerError from "server-error/ServerError";


const flightRepository = getRepository(Flight)

async function createFlightObjectToBeUpdated(id: string, dataToBeUpdated: IFlight) {
  
    const previousData = await flightRepository.find({where: {id: id}})

    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.FLIGHT_NOT_FOUND, 400)
    }
      
    const newFlightObject: IFlightToBeUpdated =   
    {
      flewHours: (!dataToBeUpdated.flewHours) 
        ? previousData[0].flewHours 
        : dataToBeUpdated.flewHours,
    }

    return newFlightObject
}

export default createFlightObjectToBeUpdated