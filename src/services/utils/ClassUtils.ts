import { IClassInputDataModel } from './../../shared/interfaces/IClass';


export class ClassUtils {

  formatClass(newClass: IClassInputDataModel) {
    const formattedClass: IClassInputDataModel = {
      id: newClass.id,
      aircraftId: newClass.aircraftId.trim(),
      description: newClass.description.trim(),
      endTime: newClass.description.trim(),
      flewHours: newClass.flewHours,
      instructorId: newClass.instructorId.trim(),
      isSolo: (newClass.isSolo === null) ? false : newClass.isSolo,
      startTime: newClass.startTime.trim(),
      studentsIds: newClass.studentsIds.map(id => id = id.trim())
    }
    return formattedClass
  }

  isClassValid(classToBeValidated: IClassInputDataModel) {
    const {
      aircraftId,
      description,
      endTime,
      flewHours,
      id,
      instructorId,
      isSolo,
      startTime,
      studentsIds
    } = classToBeValidated

    if(aircraftId === '' || description === '' || endTime === '' || instructorId === '' || startTime === '') {
      return false
    }

    studentsIds.forEach(id => {
      if(id === '') {
        return true
      } else {
        return false
      }
    })

    /*
    if(!aircraftId || !age || !email || !license || !password || !registration) {
      return false
    }
    */
    if(flewHours < 0 || flewHours >=24) {
      return false
    }
    return true
  }
}