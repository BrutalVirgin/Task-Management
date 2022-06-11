import express from "express";
import { UserController } from "../controllers/user-controller";
import { UserService } from "../services/user-service";
import { authenticateToken } from "../middlewares/jwt-auth";

const userRouter = express.Router();

const userController = new UserController(new UserService());

userRouter.post("/", userController.signup.bind(userController));

userRouter.put(
  "/emailconfirm/:id",
  userController.confirmEmail.bind(userController)
);

userRouter.post("/signin/:id", userController.signin.bind(userController));

userRouter.post(
  "/signout/:id",
  authenticateToken,
  userController.signout.bind(userController)
);

userRouter.post("/test", userController.test.bind(userController));

export { userRouter };
