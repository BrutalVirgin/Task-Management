import express from "express";
import { TaskController } from "../controllers/task-controller";
import { TaskService } from "../services/task-service";
import { authenticateToken } from "../middlewares/jwt-auth";
const taskRouter = express.Router();

const taskController = new TaskController(new TaskService());

// Create a task
taskRouter.post(
  "/",
  authenticateToken,
  taskController.addTask.bind(taskController)
);

// Edit task
taskRouter.put(
  "/:id",
  authenticateToken,
  taskController.editTask.bind(taskController)
);

// Mark task as done
taskRouter.put(
  "/markdone/:id",
  authenticateToken,
  taskController.markTaskAsDone.bind(taskController)
);

// Unmark task as done
taskRouter.put(
  "/markundone/:id",
  authenticateToken,
  taskController.markTaskAsUnDone.bind(taskController)
);

// Delete task
taskRouter.delete(
  "/deletetask/:id",
  authenticateToken,
  taskController.deleteTask.bind(taskController)
);

export { taskRouter };
