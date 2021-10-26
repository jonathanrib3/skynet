import { ErrorMessages } from '../shared/constants/messages/ErrorMessages';
import { IStudent } from '../shared/interfaces';
import { getRepository } from 'typeorm';
import { Student } from '../database/entity'
import ServerError from './utils/ServerError';


export class StudentService {

  private studentRepository = getRepository(Student)

  async findAllStudents() {
    return await this.studentRepository.find()
  }

  async findStudentById(id: string) {
    const studentFound = await this.studentRepository.find({where: {id:id}})
    
    if(studentFound.length === 0) {
      throw new ServerError(ErrorMessages.STUDENT_NOT_FOUND, 400)
    }
    return studentFound
  }

  async createStudent(newStudent: IStudent) {
    if(!newStudent) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }
    return await this.studentRepository.save(newStudent)
      .catch(error => console.log(error))
  }

  async updateStudent(id: string, dataToBeUpdated: IStudent) {
    const previousData: Student[] = await this.findStudentById(id)

    if(!dataToBeUpdated){
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

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