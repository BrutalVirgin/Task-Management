import { TaskService } from "../services/task-service";
import { Response, Request } from "express";

export class TaskController {
  constructor(private taskService: TaskService) {}

  async addTask(req: Request, res: Response) {
    try {
      const task = req.body;
      const result = await this.taskService.createTask(task);

      res.status(201).json({ result });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async editTask(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;

      const updatedTask = await this.taskService.updateTask(id, data);
      res.status(200).json({ updatedTask });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async markTaskAsDone(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const updatedTask = await this.taskService.markTaskAsDone(id);
      res.status(200).json({ updatedTask });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async markTaskAsUnDone(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const updatedTask = await this.taskService.markTaskAsUnDone(id);
      res.status(200).json({ updatedTask });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }
}
