import express from "express";
import { TaskController } from "../controllers/task-controller";
import { TaskService } from "../services/task-service";
const taskRouter = express.Router();

const taskController = new TaskController(new TaskService());

taskRouter.post("/", taskController.addTask.bind(taskController));

taskRouter.put("/:id", taskController.editTask.bind(taskController));

taskRouter.put(
  "/markdone/:id",
  taskController.markTaskAsDone.bind(taskController)
);

taskRouter.put(
  "/markundone/:id",
  taskController.markTaskAsUnDone.bind(taskController)
);

export { taskRouter };
