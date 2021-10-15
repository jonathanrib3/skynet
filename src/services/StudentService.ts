import { IStudent } from '../shared/interfaces';
import { getRepository } from 'typeorm';
import { Student } from '../database/entity'


export class StudentService {

  private studentRepository = getRepository(Student)

  async findAllStudents() {
    return await this.studentRepository.find()
  }

  async findStudentById(id: string) {
    return await this.studentRepository.find({where: {id:id}})
  }

  async createStudent(newStudent: IStudent) {
    return (!newStudent) 
    ? null
    : await this.studentRepository.save(newStudent)
  }

  async updateStudent(updatedData: IStudent) {
    return await this.studentRepository.update(updatedData.id, updatedData)
  }
} 