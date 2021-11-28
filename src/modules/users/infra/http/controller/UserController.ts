import CreateUserService from "@modules/users/services/CreateUserService";
import LoginUserService from "@modules/users/services/LoginUserService";
import { Request, Response } from "express";

export default class UserController {
  public async store(request: Request, response: Response) {
    const { name, email, password, type } = request.body;

    const createUser = new CreateUserService();

    await createUser.execute({ name, email, password, type });

    return response.status(204).json();
  }

  public async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginUser = new LoginUserService();

    const data = await loginUser.execute({ email, password });

    return response.status(200).json(data);
  }
}
