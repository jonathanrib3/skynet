import { IStudent } from 'src/shared';
import { hashPassword } from "..";

async function createPostStudentObject(newStudentData: IStudent) {

    const newStudentObject: IStudent = {
      address: newStudentData.address,
      age: newStudentData.age,
      email: newStudentData.email,
      isApproved: newStudentData.isApproved,
      name: newStudentData.name,
      password: await hashPassword(newStudentData.password),
      registration: newStudentData.registration
    }

    return newStudentObject
}

export default createPostStudentObject