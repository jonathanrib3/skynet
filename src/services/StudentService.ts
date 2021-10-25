import { IStudent } from '../shared/interfaces';
import { getRepository } from 'typeorm';
import { Student } from '../database/entity'
import { StudentUtils } from './utils';


export class StudentService {

  private studentRepository = getRepository(Student)
  private studentUtils = new StudentUtils

  async findAllStudents() {
    return await this.studentRepository.find()
  }

  async findStudentById(id: string) {
    const studentFound = await this.studentRepository.find({where: {id:id}})
    return studentFound
  }

  async createStudent(newStudent: IStudent) {
    return (!newStudent) 
    ? null
    : await this.studentRepository.save(newStudent)
  }

  async updateStudent(id: string, dataToBeUpdated: IStudent) {
    const previousData: Student[] = await this.findStudentById(id)

    return await this.studentRepository.update(id, 
      {
        address: (!dataToBeUpdated.address) 
          ? previousData[0].address 
          : dataToBeUpdated.address,
        age: (!dataToBeUpdated.age) 
          ? previousData[0].age 
          : dataToBeUpdated.age,
        email: (!dataToBeUpdated.email) 
          ? previousData[0].email 
          : dataToBeUpdated.email,
        isApproved: (!dataToBeUpdated.isApproved) 
          ? previousData[0].isApproved 
          : dataToBeUpdated.isApproved,
        name: (!dataToBeUpdated.name) 
          ? previousData[0].name 
          : dataToBeUpdated.name,
        password: (!dataToBeUpdated.password) 
          ? previousData[0].password 
          : dataToBeUpdated.password,
        registration: (!dataToBeUpdated.registration) 
          ? previousData[0].registration 
          : dataToBeUpdated.registration
      }
    )
  }

  async deleteStudent(id: string) {
    return await this.studentRepository.delete(id)
  }


} 