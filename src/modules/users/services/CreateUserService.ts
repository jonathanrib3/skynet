import { resolve } from "path";

import { USERTYPE } from ".prisma/client";
import ServerError from "@shared/errors/ServerError";
import HashProvider from "@shared/implementations/HashProvider";
import MailProvider from "@shared/implementations/MailProvider";

import UserRepository from "../infra/repositories/UserRepository";
import StudentRepository from "@modules/courses/infra/repositories/StudentRepository";

interface IRequest {
  name: string;

  email: string;

  password: string;

  type: USERTYPE;

  license?: string;
}

export default class CreateUserService {
  private hashProvider = new HashProvider();
  private userRepository = new UserRepository();
  private studentRepository = new StudentRepository();
  private mailProvider = new MailProvider();

  public async execute({ name, email, password, type, license }: IRequest) {
    const userRegistered = await this.userRepository.findUserByEmail(email);

    if (userRegistered) {
      throw new ServerError("Usuário já cadastrado.");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.createUser({
      name,
      email,
      password: hashedPassword,
      type,
      license,
    });

    if (type === "student") {
      await this.studentRepository.create(user.id);
    }

    const registerView = resolve(
      __dirname,
      "..",
      "views",
      "create-account.hbs"
    );

    await this.mailProvider.sendMail({
      to: {
        email,
        name,
      },
      templateData: {
        file: registerView,
        variables: {
          name,
        },
      },
      subject: "Bem vindo ao app da Skynet",
    });
  }
}
