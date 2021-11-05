import { ErrorMessages } from 'src/shared';
import { ServerError } from '..';
import findInstructorToLogin from "./findInstructorToLogin";
import findPilotToLogin from "./findPilotToLogin";
import findStudentToLogin from "./findStudentToLogin";

async function findUser(type: 'instructor' | 'student' | 'pilot', email: string) {

    switch(type) {
      case 'instructor':
        return await findInstructorToLogin(email)
      case 'pilot':
        return await findPilotToLogin(email)
      case 'student':
        return await findStudentToLogin(email)
      default: 
        throw new ServerError(ErrorMessages.INVALID_USER_TYPE, 401)    
    }
}

export default findUser