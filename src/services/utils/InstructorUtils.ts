import { IInstructor } from '../../shared/interfaces/IInstructor';


/*
export class InstructorUtils {

  formatInstructor(instructor: IInstructor) {
    const formattedInstructor: IInstructor = {
      id: instructor.id,
      address: instructor.address.trim(),
      age: instructor.age,
      email: instructor.email.trim(),
      
      password: instructor.email.trim(),
      registration: instructor.registration.trim()
    }
    return formattedInstructor
  }

  isStudentValid(student: IStudent) {
    const {
      address,
      age,
      email,
      isApproved,
      password,
      registration
    } = student

    if(address === '' || email === '' || password === '' || registration === '') {
      return false
    }
    if(!address || !age || !email || !isApproved || !password || !registration) {
      return false
    }
    if(age <= 0 || age >=90) {
      return false
    }
    return true
  }
} */