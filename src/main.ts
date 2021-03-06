import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { taskRouter } from "./routes/task-router";
import { userRouter } from "./routes/user-router";
import mongoose from "mongoose";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app = express();
app.use(bodyParser.json());

app.use("/tasks", taskRouter);
app.use("/users", userRouter);

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("database connected");
    app.listen(process.env.PORT, () => console.log(`runnin`));
  } catch (e) {
    console.log(e);
  }
}

start();
