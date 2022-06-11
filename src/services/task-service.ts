import { ITask } from "../types/task-type";
import { taskShema } from "../db/models/task-model";
import { HttpError } from "../models/http-error";

export class TaskService {
  async createTask(data: ITask) {
    return await taskShema.create(data);
  }

  async updateTask(id: string, data: ITask) {
    const task = await taskShema.findByIdAndUpdate(id, data);

    if (!task) throw new HttpError("Wrong task id", 404);

    const updatedTask = taskShema.findById(id);
    return updatedTask;
  }

  async markTaskAsDone(id: string) {
    const task = await taskShema.findById(id);

    if (!task) throw new HttpError("Wrong task id", 404);

    if (task.isDone === true) {
      throw new HttpError("Task is already marked as done", 403);
    } else {
      await taskShema.findByIdAndUpdate(id, {
        isDone: true,
      });
    }
    return await taskShema.findById(id);
  }

  async markTaskAsUnDone(id: string) {
    const task = await taskShema.findById(id);

    if (!task) throw new HttpError("Wrong task id", 404);

    if (task.isDone === false) {
      throw new HttpError("Task is already marked as undone", 403);
    } else {
      await taskShema.findByIdAndUpdate(id, {
        isDone: false,
      });
    }
    return await taskShema.findById(id);
  }
}
