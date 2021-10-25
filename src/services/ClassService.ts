import { Student, Instructor, Aircraft, Pilot } from '../database/entity';
import { Class } from '../database/entity';
import { getRepository } from 'typeorm'
import { IClassInputDataModel} from '../shared/interfaces';


export class ClassService {

  private classRepository = getRepository(Class)
  private studentRepository = getRepository(Student)
  private instructorRepository = getRepository(Instructor)
  private aircraftRepository = getRepository(Aircraft)
  private pilotRepository = getRepository(Pilot)

  async findAllClasses() {
    return await this.classRepository.find(
      {relations: ['aircrafts','instructors','students', 'pilot']})
  }

  async findClassById(id: string) {
    return await this.classRepository.find({where: {id: id}, relations: ['aircrafts','instructors','students', 'pilot']})
  }

  async createClass(newClassData: IClassInputDataModel) {
    const students = await this.studentRepository
      .findByIds(newClassData.studentsIds)
    
    const instructors = await this.instructorRepository
      .findByIds(newClassData.instructorsIds) 

    const aircrafts = await this.aircraftRepository
      .findByIds(newClassData.aircraftsIds)

    const pilot = await this.pilotRepository
      .findByIds(newClassData.pilotsIds)

    console.log(pilot[0])
    
    return (!newClassData) 
    ? null
    : await this.classRepository.save(
        {
          aircrafts: aircrafts,
          students: students,
          instructors: instructors,
          pilot: pilot,
          description: newClassData.description,
          endDate: newClassData.endDate,
          flewHours: newClassData.flewHours,
          isSolo: newClassData.isSolo,
          startDate: newClassData.startDate
        }
    )
  }

  async updateClass(id: string, dataToBeUpdated: IClassInputDataModel) {
    const previousData: Class[] = await this.findClassById(id)

    return await this.classRepository.update(id, 
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
    )
  }

  async deleteClass(id: string) {
    return await this.classRepository.delete(id)
  }

} 