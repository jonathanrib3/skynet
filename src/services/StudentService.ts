import { ErrorMessages, IStudent, SuccessfulMessages } from '../shared';
import { getRepository } from 'typeorm';
import { Student } from '../database/entity'
import ServerError from './utils/server-error/ServerError';
import { createPatchStudentObject, createPostStudentObject } from './utils';


export class StudentService {

  private studentRepository = getRepository(Student)

  async findAllStudents() {

    const students = await this.studentRepository.find()

    if(!students) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(students.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_STUDENT_TABLE, 400)
    }
    return students
  }

  async findStudentById(id: string) {

    const student = await this.studentRepository.find({where: {id: id}})
    
    if(!student) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(student.length === 0) {
      throw new ServerError(ErrorMessages.STUDENT_NOT_FOUND, 400)
    }
      
    return student
  }

  async createStudent(newStudent: IStudent) {

    if(!newStudent) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.studentRepository
      .save(await createPostStudentObject(newStudent))
  }

  async updateStudent(id: string, dataToBeUpdated: IStudent) {

    if(!dataToBeUpdated){
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.studentRepository
      .update(id, await createPatchStudentObject(id, dataToBeUpdated))
  }

  async deleteStudent(id: string) {

    const deleteResult = await this.studentRepository.delete(id)

    if(!deleteResult) {
      throw new ServerError(ErrorMessages.UNKNOWN_DELETE_ERROR, 400)
    }

    if(deleteResult.affected === 0) {
      throw new ServerError(ErrorMessages.ID_DELETE_ERROR, 400)
    }

    return SuccessfulMessages.STUDENT_DELETE_SUCCESSFUL
  }


} 