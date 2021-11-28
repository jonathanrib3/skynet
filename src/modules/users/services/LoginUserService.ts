import ServerError from "@shared/errors/ServerError";
import HashProvider from "@shared/implementations/HashProvider";
import JwtProvider from "@shared/implementations/JwtProvider";
import UserRepository from "../infra/repositories/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

export default class LoginUserService {
  private hashProvider = new HashProvider();
  private userRepository = new UserRepository();
  private jwtProvider = new JwtProvider();

  public async execute({ email, password }: IRequest) {
    const userRegistered = await this.userRepository.findUserByEmail(email);

    if (!userRegistered) {
      throw new ServerError("Usuário ou senha incorreto.");
    }

    const comparePassword = await this.hashProvider.compare(
      password,
      userRegistered.password
    );

    if (!comparePassword) {
      throw new ServerError("Usuário ou senha incorreto.");
    }

    const token = this.jwtProvider.sign<IUserTokenData>(
      {
        data: {
          id: userRegistered.id,
          name: userRegistered.name,
          type: userRegistered.type,
        },
      },
      process.env.JWT_SECRET || "",
      { expireIn: "8h" }
    );

    return {
      token,
      id: userRegistered.id,
      name: userRegistered.name,
      type: userRegistered.type,
      license: userRegistered.license,
      email: userRegistered.email,
    };
  }
}
