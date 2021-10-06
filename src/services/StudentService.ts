import { IStudent } from './../shared/interfaces/IStudent';
import { getRepository } from 'typeorm';
import { Student } from '../database/entity/Student'


export default class StudentService {

  private studentRepository = getRepository(Student)

  async findAllStudents() {
    return await this.studentRepository.find()
  }

  async findStudentById(id: any) {
    return await this.studentRepository.findByIds(id)
  }

  async createStudent(newStudent: IStudent) {
    return (!newStudent) 
    ? null
    : await this.studentRepository.save(newStudent)
  }

  
} 