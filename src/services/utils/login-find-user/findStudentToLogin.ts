import { ErrorMessages } from 'src/shared';
import { Student } from 'src/database/entity';
import { getRepository } from "typeorm";
import { ServerError } from '..';

async function findStudentToLogin(email: string) {

  const user = await getRepository(Student)
    .find({where: {email: email}})
    
  if(user.length === 0) {
    throw new ServerError(ErrorMessages.INVALID_USER_EMAIL, 400)
  }
  
  return user 
}

export default findStudentToLogin