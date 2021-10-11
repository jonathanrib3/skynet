import { Instructor } from './../database/entity'
import { getRepository } from 'typeorm'
import { IInstructor } from '../shared/interfaces'

export class InstructorService {

  private instructorRepository = getRepository(Instructor)

  async findAllInstructors() {
    return await this.instructorRepository.find()
  }

  async findInstructorById(id: any) {
    return await this.instructorRepository.findByIds(id)
  }

  async createInstructor(newInstructor: IInstructor) {
    return (!newInstructor) 
    ? null
    : await this.instructorRepository.save(newInstructor)
  }
} 