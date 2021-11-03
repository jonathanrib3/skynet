import { Pilot } from "src/database/entity";
import { ErrorMessages, IPilot } from "src/shared";
import { getRepository } from "typeorm";
import ServerError from "../server-error/ServerError";

const pilotRepository = getRepository(Pilot)

async function createPatchPilotObject(
  id: string, 
  dataToBeUpdated: IPilot) {

    const previousData: Pilot[] = await pilotRepository
      .find({where: {id: id}})
      .catch(error => console.log(error)) as Pilot[]

    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.PILOT_NOT_FOUND, 400)
    }

    const patchedPilot = 
      {
        address: (!dataToBeUpdated.address) 
          ? previousData[0].address 
          : dataToBeUpdated.address,
        age: (!dataToBeUpdated.age) 
          ? previousData[0].age 
          : dataToBeUpdated.age,
        email: (!dataToBeUpdated.email) 
          ? previousData[0].email 
          : dataToBeUpdated.email,
        license: (!dataToBeUpdated.license) 
          ? previousData[0].license 
          : dataToBeUpdated.license,
        name: (!dataToBeUpdated.name) 
          ? previousData[0].name 
          : dataToBeUpdated.name,
        password: (!dataToBeUpdated.password) 
          ? previousData[0].password 
          : dataToBeUpdated.password,
        registration: (!dataToBeUpdated.registration) 
          ? previousData[0].registration 
          : dataToBeUpdated.registration
      }
    return patchedPilot  
}

export default createPatchPilotObject