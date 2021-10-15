import { IStudent } from '../../shared/interfaces';


export class StudentUtils {

  formatStudent(student: IStudent) {
    const formattedStudent: IStudent = {
      id: student.id,
      address: student.address.trim(),
      age: student.age,
      email: student.email.trim(),
      isApproved: (!student.isApproved === null) ? false : true,
      password: student.email.trim(),
      registration: student.registration.trim()
    }
    return formattedStudent
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
} 