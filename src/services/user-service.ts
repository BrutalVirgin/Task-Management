import dotenv from "dotenv";
import { IUser } from "../types/user-type";
import { userShema } from "../db/models/user-model";
import { HttpError } from "../models/http-error";
import moment from "moment";
import jwt from "jsonwebtoken";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export class UserService {
  async addUser(data: IUser) {
    return await userShema.create(data);
  }

  async confirmUserEmail(id: string) {
    const user = await userShema.findById(id);

    if (!user) throw new HttpError("User not found", 404);

    if (user.confirmedAt !== null) {
      throw new HttpError("User already confirmed email", 404);
    } else {
      const date = moment().format("DD-MM-YYYY HH:mm");

      await userShema.findByIdAndUpdate(id, {
        confirmedAt: date,
      });
    }
    return await userShema.findById(id);
  }

  async signin(email: string, password: string) {
    const user = await userShema.findOne({ email });

    if (!user) throw new HttpError("Email not found", 404);

    if (user.confirmedAt === null) {
      throw new HttpError(
        "User has not confirmed the email, access is denied",
        400
      );
    }

    if (user.password !== password) {
      throw new HttpError("Incorrect password", 400);
    } else {
      const token = jwt.sign(
        {
          // id: user._id,
          user,
        },
        String(process.env.JWT_TOKEN),
        { expiresIn: 3600 }
      );
      return { token: `Bearer ${token}` };
    }
  }

  async signout(user: IUser) {
    const token = jwt.sign(
      {
        user,
      },
      "Invalid_token",
      { expiresIn: 3600 }
    );
    return { token: `Bearer ${token}` };
  }
}
