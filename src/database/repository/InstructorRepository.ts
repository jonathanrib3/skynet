import { Instructor } from './../entity/Instructor';
import { getRepository } from 'typeorm';

const InstructorRepository = getRepository(Instructor)

export default InstructorRepository