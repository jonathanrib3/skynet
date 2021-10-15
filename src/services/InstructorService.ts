import { Instructor } from './../database/entity'
import { getRepository } from 'typeorm'
import { IInstructor } from '../shared/interfaces'

export class InstructorService {

  private instructorRepository = getRepository(Instructor)

  async findAllInstructors() {
    return await this.instructorRepository.find()
  }

  async findInstructorById(id: string) {
  
    console.log('****************************************',id)
    return await this.instructorRepository.find({where: {id: id}})
  }

  async createInstructor(newInstructor: IInstructor) {
    return (!newInstructor) 
    ? null
    : await this.instructorRepository.save(newInstructor)
  }

  async updateInstructor(updatedData: IInstructor) {
    return await this.instructorRepository.update(updatedData.id, updatedData)
  }
} 