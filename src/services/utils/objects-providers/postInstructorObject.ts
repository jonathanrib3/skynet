import { IInstructor } from 'src/shared';
import { hashPassword } from "..";

async function createPostInstructorObject(newInstructorData: IInstructor) {

    const newInstructorObject: IInstructor = {
      address: newInstructorData.address,
      age: newInstructorData.age,
      courseName: newInstructorData.courseName,
      email: newInstructorData.email,
      graduateDate: newInstructorData.graduateDate,
      instituteName: newInstructorData.instituteName,
      name: newInstructorData.name,
      password: await hashPassword(newInstructorData.password),
      registration: newInstructorData.registration
    }

    return newInstructorObject
}

export default createPostInstructorObject