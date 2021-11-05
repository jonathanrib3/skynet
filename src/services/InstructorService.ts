import { Instructor } from './../database/entity'
import { DeleteResult, getRepository } from 'typeorm'
import { ErrorMessages, SuccessfulMessages, IInstructor } from '../shared'
import { createPatchInstructorObject, createPostInstructorObject, ServerError } from './utils'

export class InstructorService {

  private instructorRepository = getRepository(Instructor)

  async findAllInstructors() {

    const instructors = await this.instructorRepository.find()

    if(!instructors) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(instructors.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_INSTRUCTOR_TABLE, 400)
    }

    return instructors
  }

  async findInstructorById(id: string) {

    const instructor = await this.instructorRepository.find({where: {id: id}})
    
    if(!instructor) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(instructor.length === 0) {
      throw new ServerError(ErrorMessages.INSTRUCTOR_NOT_FOUND, 400)
    }
      
    return instructor
  }

  async createInstructor(newInstructor: IInstructor) {

    if(!newInstructor) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }
    
    return await this.instructorRepository
      .save(await createPostInstructorObject(newInstructor))
  }

  async updateInstructor(id: string, dataToBeUpdated: IInstructor) {
    
    if(!dataToBeUpdated) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.instructorRepository
      .update(id, await createPatchInstructorObject(id, dataToBeUpdated))
      
  }

  async deleteInstructor(id: string) {
    
    const deleteResult = await this.instructorRepository.delete(id)

    if(!deleteResult) {
      throw new ServerError(ErrorMessages.UNKNOWN_DELETE_ERROR, 400)
    }

    if(deleteResult.affected === 0) {
      throw new ServerError(ErrorMessages.ID_DELETE_ERROR, 400)
    }

    return SuccessfulMessages.INSTRUCTOR_DELETE_SUCCESSFUL
  }
} 