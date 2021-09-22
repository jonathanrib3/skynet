import { Student } from './../entity/Student';
import { getRepository } from 'typeorm';


const StudentRepository = getRepository(Student)

export default StudentRepository