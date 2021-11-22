import { Class } from "database/entity";
import { ErrorMessages, IClass, IClassToBeUpdated } from "shared";
import { getRepository } from "typeorm";
import ServerError  from "server-error/ServerError";

const classRepository = getRepository(Class)

async function createClassObjectToBeUpdated(id: string, dataToBeUpdated: IClass) {
    
    const previousData: Class[] = await classRepository.find({where: {id: id}})
    
    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.CLASS_NOT_FOUND, 400)
    }

    const toBePatchedData: IClassToBeUpdated = 
      {
        description: (!dataToBeUpdated.description) 
          ? previousData[0].description 
          : dataToBeUpdated.description,
        endDate: (!dataToBeUpdated.endDate) 
          ? previousData[0].endDate 
          : dataToBeUpdated.endDate,
        flewHours: (!dataToBeUpdated.flewHours) 
          ? previousData[0].flewHours 
          : dataToBeUpdated.flewHours,
        startDate: (!dataToBeUpdated.startDate) 
          ? previousData[0].startDate
          : dataToBeUpdated.startDate 
      }     
    return toBePatchedData  
}

export default createClassObjectToBeUpdated