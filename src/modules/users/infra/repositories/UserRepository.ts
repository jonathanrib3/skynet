import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import prisma from "@shared/infra/database/prisma";

export default class UserRepository {
  private userRepository = prisma.user;

  public async createUser({
    email,
    name,
    type,
    password,
    license,
  }: ICreateUserDTO) {
    const user = await this.userRepository.create({
      data: {
        email,
        name,
        type,
        password,
        license,
      },
    });

    return user;
  }

  public async findUserByEmail(email: string) {
    return this.userRepository.findFirst({
      where: {
        email,
      },
    });
  }

  public async listInstructors() {
    return this.userRepository.findMany({
      where: {
        type: "instructor",
      },
    });
  }
}
