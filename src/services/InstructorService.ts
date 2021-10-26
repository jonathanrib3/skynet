import { Instructor } from './../database/entity'
import { getRepository } from 'typeorm'
import { IInstructor } from '../shared/interfaces'

export class InstructorService {

  private instructorRepository = getRepository(Instructor)

  async findAllInstructors() {
    return await this.instructorRepository.find()
  }

  async findInstructorById(id: string) {
    return await this.instructorRepository.find({where: {id: id}})
  }

  async createInstructor(newInstructor: IInstructor) {
    return (!newInstructor) 
    ? null
    : await this.instructorRepository.save(newInstructor)
  }

  async updateInstructor(id: string, dataToBeUpdated: IInstructor) {
    const previousData: Instructor[] = await this.findInstructorById(id)

    return await this.instructorRepository.update(id, 
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
        courseName: (!dataToBeUpdated.courseName) 
          ? previousData[0].courseName 
          : dataToBeUpdated.courseName,
        graduateDate: (!dataToBeUpdated.graduateDate) 
          ? previousData[0].graduateDate 
          : dataToBeUpdated.graduateDate,
        instituteName: (!dataToBeUpdated.instituteName) 
          ? previousData[0].instituteName 
          : dataToBeUpdated.instituteName,
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

  async deleteInstructor(id: string) {
    return await this.instructorRepository.delete(id)
  }
} 