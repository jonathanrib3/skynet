import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { handle } from "../utils/error";
import { logger } from "../utils/logger";
import pinoHttp from "pino-http";
import { createHttpTerminator } from "http-terminator";
import {
  aircraftRouter,
  classRouter,
  instructorRouter,
  pilotRouter,
  studentRouter,
  sessionsRouter,
} from "./routes";
import { errorHandler } from "../utils/serverErrorHandler";
import { errors } from "celebrate";


const app = express();

async function initServer() {
  const PORT = process.env.PORT;
  const ADDRESS = process.env.SERVER_ADDRESS;

  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp({ logger }));
  app.use("/aircraft", aircraftRouter);
  app.use("/class", classRouter);
  app.use("/pilot", pilotRouter);
  app.use("/student", studentRouter);
  app.use("/instructor", instructorRouter);
  app.use("/login", sessionsRouter);
  app.use(errors())
  app.use(errorHandler);

  const server = app.listen(PORT, () => {
    logger.info(
      `Server running in address http://${ADDRESS}:${PORT} on ${process.env.NODE_ENV} environment`
    );
  });

  /*
    HTTP Terminator é uma lib quer permite encerrar o server de forma mais suave,
    sem interromper alguma operação que esteja ocorrendo no momento do encerraamento.
    Ao receber algum desses sinais de shutdown, o serviço de log mostra a mensagem
    e encerra o server
  */
  const httpTerminator = createHttpTerminator({ server });

  enum shutdownSignals {
    SIGHUP = "SIGHUP",
    SIGINT = "SIGINT",
    SIGTERM = "SIGTERM",
  }

  Object.values(shutdownSignals).forEach((signal) => {
    process.on(signal, async () => {
      logger.info(`${signal} received, server turning off...`);
      await httpTerminator.terminate();
    });
  });
}

initServer();
