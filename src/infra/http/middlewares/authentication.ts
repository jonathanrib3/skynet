import { NextFunction, Request, Response } from "express";
import JwtProvider from "../../../infra/utils/JwtProvider";
import { ServerError } from "../../../services/utils";

export default (request: Request, response: Response, next: NextFunction) => {
  const jwtProvider = new JwtProvider();

  const { authorization } = request.headers;

  if (!authorization) {
    throw new ServerError("No jwt provided", 401);
  }

  const [, token] = authorization.split(" ");

  const decoded = jwtProvider.authorize<UserToken>(token);

  if (!decoded) {
    throw new ServerError("Invalid jwt", 401);
  }

  const { data } = decoded;

  request.user = data;

  next();
};
