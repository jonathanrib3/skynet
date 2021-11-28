import "express-async-errors";
import cors from "cors";
import express, { Express, Response, Request, NextFunction } from "express";
import ServerError from "@shared/errors/ServerError";
import { userRouter } from "@modules/users/infra/http/routes";
import {
  coursesRouter,
  classesRouter,
  certificatesRouter,
} from "@modules/courses/infra/http/routes";
import { aircraftsRouter } from "@modules/aircrafts/infra/http/routes";

export default class Server {
  private server: Express;

  constructor() {
    this.server = express();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private route() {
    this.server.get("/ping", (req, res) => res.send("pong"));

    this.server.use("/users", userRouter);
    this.server.use("/courses", coursesRouter);
    this.server.use("/classes", classesRouter);
    this.server.use("/aircrafts", aircraftsRouter);
    this.server.use("/certificates", certificatesRouter);
  }

  public init() {
    this.middlewares();
    this.route();

    this.handleError();
    return this.server;
  }

  private handleError() {
    this.server.use(
      async (
        err: Error | any,
        request: Request,
        response: Response,
        _: NextFunction
      ) => {
        if (err instanceof ServerError) {
          return response
            .status(err.statusCode)
            .json({ message: err.message, success: false });
        }

        console.log(err);

        return response.status(500).json({
          message: "Erro interno do servidor",
          success: false,
        });
      }
    );
  }
}
