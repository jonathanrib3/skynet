import { Class } from "src/database/entity";
import { ErrorMessages, IClassInputDataModel } from "src/shared";
import { getRepository } from "typeorm";
import { ServerError } from "..";

const classRepository = getRepository(Class)

async function createPatchClassObject(id: string, dataToBeUpdated: IClassInputDataModel) {
    
    const previousData: Class[] = await classRepository.find({where: {id: id}})
    
    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.CLASS_NOT_FOUND, 400)
    }

    const toBePatchedData = 
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
        isSolo: (!dataToBeUpdated.isSolo) 
          ? previousData[0].isSolo 
          : dataToBeUpdated.isSolo,
        startDate: (!dataToBeUpdated.startDate) 
          ? previousData[0].startDate
          : dataToBeUpdated.startDate 
      }     
    return toBePatchedData  
}

export default createPatchClassObject