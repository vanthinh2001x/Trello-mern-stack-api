import express from "express";
import { env } from "~/config/environment";
import { connectDB } from "~/config/mongodb";
import { BoardModel } from "./models/board.model";

connectDB()
  .then(() => console.log("Connected successfully to database server!"))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
const bootServer = () => {
  const app = express();
  app.get("/test", async (req, res) => {
    res.end("<h1>Hello world!</h1>");
  });
  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello Thinhpv, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`
    );
  });
};
