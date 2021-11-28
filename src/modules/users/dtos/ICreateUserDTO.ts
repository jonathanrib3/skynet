import { USERTYPE } from ".prisma/client";

export default interface ICreateUserDTO {
  name: string;

  email: string;

  password: string;

  type: USERTYPE;

  license?: string;
}
