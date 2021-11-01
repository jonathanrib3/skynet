import { Student } from "src/database/entity";
import { IStudent } from "src/shared";
import { getRepository } from "typeorm";

const studentRepository = getRepository(Student)

async function createPatchStudentObject(
  id: string, 
  dataToBeUpdated: IStudent) {

    const previousData: Student[] = await studentRepository
      .find({where: {id: id}})
      .catch(error => console.log(error)) as Student[]

    const patchedStudent = 
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
    return patchedStudent      
}

export default createPatchStudentObject