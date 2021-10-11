import { Student, Instructor, Aircraft } from '../database/entity';
import { Class } from '../database/entity';
import { getRepository } from 'typeorm'
import { IClass } from '../shared/interfaces';

export class ClassService {

  private classRepository = getRepository(Class)
  private studentRepository = getRepository(Student)
  private instructorRepository = getRepository(Instructor)
  private aircraftRepository = getRepository(Aircraft)

  async findAllClasses() {
    return await this.classRepository.find({relations: ['aircraft','instructor','student']})
  }

  async findClassById(id: any) {
    return await this.classRepository.findByIds(id)
  }

  async createClass(newClassData: IClass) {
    
    const student = await this.studentRepository.find({where: {id: newClassData.studentId }})
    const instructor = await this.instructorRepository.find({where: {id: newClassData.instructorId }}) 
    const aircraft = await this.aircraftRepository.find({where: {id: newClassData.aircraftId }})
  
    return (!newClassData) 
    ? null
    : await this.classRepository.save(
        {
          aircraft: aircraft[0],
          student: student,
          instructor: instructor,
          description: newClassData.description,
          endTime: newClassData.endTime,
          flewHours: newClassData.flewHours,
          isSolo: newClassData.isSolo,
          startTime: newClassData.startTime
        }
    )
  }
} 