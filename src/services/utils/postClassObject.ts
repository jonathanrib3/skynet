import { Aircraft, Student, Instructor } from "src/database/entity";
import { IClassInputDataModel } from 'src/shared';

function createPostClassObject(
  students: Student[], 
  instructors: Instructor[], 
  aircrafts: Aircraft[],
  newClassData: IClassInputDataModel) {

    const newClassObject = {
      aircrafts: aircrafts,
      students: students,
      instructors: instructors,
      description: newClassData.description,
      endDate: newClassData.endDate,
      flewHours: newClassData.flewHours,
      isSolo: newClassData.isSolo,
      startDate: newClassData.startDate
    }

    return newClassObject
}

export default createPostClassObject