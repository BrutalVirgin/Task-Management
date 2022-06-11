import { Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    isDone: boolean;
    priority: number;
    dueDate: string;
}
