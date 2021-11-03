import { ErrorMessages } from 'src/shared';
import { Instructor } from 'src/database/entity';
import { getRepository } from "typeorm";
import { ServerError } from '..';

async function findInstructorToLogin(email: string) {

  const user = await getRepository(Instructor)
    .find({where: {email: email}})
    
  if(user.length === 0) {
    throw new ServerError(ErrorMessages.INVALID_USER_EMAIL, 400)
  }
  
  return user 
}

export default findInstructorToLogin