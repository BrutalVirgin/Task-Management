import { TaskService } from "../services/task-service";
import { Response, Request } from "express";
import moment from "moment";
import { HttpError } from "../models/http-error";

export class TaskController {
  constructor(private taskService: TaskService) {}

  async addTask(req: Request, res: Response) {
    try {
      const dueDate = req.body.data.dueDate;

      if (moment(dueDate).isBefore(moment())) {
        throw new HttpError("Date must be at least current", 400);
      }

      req.body.data.dueDate = moment(dueDate, "MM-DD-YYYY").format(
        "DD-MM-YYYY HH:mm"
      );
      req.body.data.userId = req.body.user.user._id;
      const data = req.body.data;

      const result = await this.taskService.createTask(data);

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
      const data = req.body.user;

      const updatedTask = await this.taskService.markTaskAsDone(id, data);
      res.status(200).json({ updatedTask });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async markTaskAsUnDone(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body.user;

      const updatedTask = await this.taskService.markTaskAsUnDone(id, data);
      res.status(200).json({ updatedTask });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body.user;

      await this.taskService.delete(id, data);
      res.status(200).json({ message: `Task with id: ${id} was deleted` });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }
}
