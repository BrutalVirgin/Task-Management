import { Schema, model } from "mongoose";
import isEmail from "validator/lib/isEmail";

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  confirmedAt: {
    type: String,
    default: null,
  },
});
const userShema = model("users", user);
export { userShema };
