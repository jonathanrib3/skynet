import { Aircraft, Associate } from "database/entity";
import { IClass, IClassToBeSaved } from 'shared';

function createClassObjectToBeSaved(
  associates: Associate[], 
  aircrafts: Aircraft[],
  newClassData: IClass) {

    const newClassObject: IClassToBeSaved = {
      aircrafts: aircrafts,
      associates: associates,
      description: newClassData.description,
      endDate: newClassData.endDate,
      flewHours: newClassData.flewHours,
      isSolo: newClassData.isSolo,
      startDate: newClassData.startDate
    }

    return newClassObject
}

export default createClassObjectToBeSaved