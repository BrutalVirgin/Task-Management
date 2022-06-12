import express from "express";
import { UserController } from "../controllers/user-controller";
import { UserService } from "../services/user-service";
import { authenticateToken } from "../middlewares/jwt-auth";

const userRouter = express.Router();

const userController = new UserController(new UserService());

// Sign up
userRouter.post("/", userController.signup.bind(userController));

// Confirm his email
userRouter.put(
  "/emailconfirm/:id",
  userController.confirmEmail.bind(userController)
);

// Sign in
userRouter.post("/signin", userController.signin.bind(userController));

// Sign out
userRouter.post(
  "/signout",
  authenticateToken,
  userController.signout.bind(userController)
);

export { userRouter };
