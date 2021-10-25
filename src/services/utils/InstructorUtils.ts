import { IInstructor } from '../../shared/interfaces/IInstructor';


export class InstructorUtils {
  /*
  formatInstructor(instructor: IInstructor) {
    const formattedInstructor: IInstructor = {
      id: instructor.id,
      address: instructor.address.trim(),
      age: instructor.age,
      email: instructor.email.trim(),
      courseName: instructor.courseName.trim(),
      graduateDate: instructor.graduateDate.trim(),
      instituteName: instructor.instituteName.trim(),
      password: instructor.email.trim(),
      registration: instructor.registration.trim()
    }
    return formattedInstructor
  }
  */
  isStudentValid(instructor: IInstructor) {
    const {
      address,
      age,
      email,
      courseName,
      graduateDate,
      instituteName,
      password,
      registration
    } = instructor

    if(address === '' || email === '' || password === '' || registration === '' 
        || courseName === '' || instituteName === '' || graduateDate === '') {
          return false
    }
    
    if(!address || !age  || !email || !password || !registration  
        || !courseName || !instituteName || !graduateDate) {
          return false
    }

    if(age <= 0 || age >=90) {
      return false
    }
    return true
  }
} 