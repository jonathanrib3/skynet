import bcrypt from 'bcryptjs';
import { ErrorMessages } from 'src/shared';
import JwtProvider from "../infra/utils/JwtProvider";
import { findUser, ServerError } from "./utils";

interface IRequest {
  email: string;
  password: string;
  type: "student" | "pilot" | "instructor";
}

export default class LoginService {
  private jwtProvider = new JwtProvider();

  public async execute({ email, password, type }: IRequest) {
    
    const user = await findUser(type, email)
  
    if(bcrypt.compareSync(password, user[0].password)) {
      const token = this.jwtProvider.sign<UserToken>({
        data: {
          id: 1,
          type,
        },
      });
      return { token, user };
    }

    throw new ServerError(ErrorMessages.INVALID_PASSWORD_ERROR, 401)
  }
}
