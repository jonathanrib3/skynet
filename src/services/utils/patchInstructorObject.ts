import { Instructor } from "src/database/entity";
import { IInstructor } from "src/shared";
import { getRepository } from "typeorm";

const aircraftRepository = getRepository(Instructor)

async function createPatchAircraftObject(
  id: string, 
  dataToBeUpdated: IInstructor) {

    const previousData: Instructor[] = await aircraftRepository
      .find({where: {id: id}})
    
    const patchedInstructor =
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
    
    return patchedInstructor
}

export default createPatchAircraftObject