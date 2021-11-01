import { Aircraft } from "src/database/entity";
import { getRepository } from "typeorm";
import { IAircraft } from "src/shared";

const aircraftRepository = getRepository(Aircraft)

async function createPatchAircraftObject(
  id: string, dataToBeUpdated: IAircraft) {
  
    const previousData: Aircraft[] = await aircraftRepository
      .find({where: {id: id}})
      .catch(error => console.log(error)) as Aircraft[]

    const patchedAircraft =   
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

    return patchedAircraft
}

export default createPatchAircraftObject