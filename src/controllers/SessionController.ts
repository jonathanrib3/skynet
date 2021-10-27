import { Request, Response } from "express";
import LoginService from "../services/LoginService";

export default class SessionController {
  public async store(request: Request, response: Response) {
    const { email, password, type } = request.body;

    const loginService = new LoginService();

    const { token, user } = await loginService.execute({
      email,
      password,
      type,
    });

    return response.json({ token, user });
  }
}
