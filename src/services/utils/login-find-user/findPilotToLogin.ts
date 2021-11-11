import { ErrorMessages } from 'src/shared';
import { Pilot } from 'src/database/entity';
import { getRepository } from "typeorm";
import { ServerError } from '..';

async function findPilotToLogin(email: string) {

  const user = await getRepository(Pilot)
    .find({where: {email: email}})
    
  if(user.length === 0) {
    throw new ServerError(ErrorMessages.INVALID_USER_EMAIL, 400)
  }
  
  return user 
}

export default findPilotToLogin