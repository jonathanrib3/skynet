import { Student, Instructor, Aircraft } from '../database/entity';
import { Class } from '../database/entity';
import { getRepository } from 'typeorm'
import { IClass } from '../shared/interfaces';
import { FORMERR } from 'dns';

export class ClassService {

  private classRepository = getRepository(Class)
  private studentRepository = getRepository(Student)
  private instructorRepository = getRepository(Instructor)
  private aircraftRepository = getRepository(Aircraft)

  async findAllClasses() {
    return await this.classRepository.find(
      {relations: ['aircraft','instructor','student']})
  }

  async findClassById(id: string) {
    
    return await this.classRepository.find({where: {id: id}, relations: ['aircraft','instructor','student']})
  }

  async updateClass(updatedData: IClass) {
    return await this.classRepository.update(updatedData.id, updatedData)
  }

  async createClass(newClassData: IClass) {
    const studentsTest = await this.studentRepository.findByIds(newClassData.studentsIds)
    console.log(studentsTest)  
    const instructor = await this.instructorRepository
      .find({where: {id: newClassData.instructorId }}) 

    const aircraft = await this.aircraftRepository
      .find({where: {id: newClassData.aircraftId }})
    
    return (!newClassData) 
    ? null
    : await this.classRepository.save(
        {
          aircraft: aircraft[0],
          students: studentsTest,
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