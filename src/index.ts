import "reflect-metadata";
import "dotenv/config";

import HttpServer from "@shared/infra/http/server";

async function main() {
  console.log(`Running on enviroment: ${process.env.ENVIRONMENT}`);

  const server = new HttpServer();

  const api = server.init();

  api.listen(process.env.PORT, async () => {
    console.log("API started on port: " + process.env.PORT);
  });
}

main();
