import dotenv from "dotenv";
import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import { taskRouter } from "./routes/task-router";
import { userRouter } from "./routes/user-router";
import mongoose from "mongoose";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app = express();
app.use(bodyParser.json());

app.use("/", (req: Request, res: Response) => {
  res.send("test");
});
app.use("/tasks", taskRouter);
app.use("/users", userRouter);

async function start() {
  try {
    //mongodb+srv://Brutal:345124qe@tasks.7vencrt.mongodb.net/Tasks
    //process.env.DBURL as string
    await mongoose.connect(
      "mongodb+srv://Brutal:345124qe@tasks.7vencrt.mongodb.net/Tasks?retryWrites=true&w=majority'"
    );
    console.log("database connected");
    app.listen(process.env.PORT, () => console.log(`runnin`));
  } catch (e) {
    console.log(e);
  }
}

start();
