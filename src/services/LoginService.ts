import JwtProvider from "../infra/utils/JwtProvider";

interface IRequest {
  email: string;
  password: string;
  type: "student" | "pilot" | "instructor";
}

export default class LoginService {
  private jwtProvider = new JwtProvider();

  public async execute({ email, password, type }: IRequest) {
    // AQUI FAZER A VALIDACAO DO USUARIO
    // VE SE EXISTE
    const user = {};

    const token = this.jwtProvider.sign<UserToken>({
      data: {
        id: 1,
        type: "instructor",
      },
    });

    return { token, user };
  }
}
