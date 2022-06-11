import { Schema, model } from "mongoose";

const task = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});
const taskShema = model("tasks", task);
export { taskShema };
