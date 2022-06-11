import { UserService } from "../services/user-service";
import { Response, Request } from "express";
import moment from "moment";

export class UserController {
  constructor(private userService: UserService) {}

  async signup(req: Request, res: Response) {
    try {
      const user = req.body;
      const result = await this.userService.addUser(user);

      res.status(201).json({ result });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async confirmEmail(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await this.userService.confirmUserEmail(id);

      res.status(200).json({ user });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async signin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.userService.signin(email, password);

      res.json({ result });
    } catch (err: any) {
      res.json({ message: err.message });
    }
  }

  async signout(req: Request, res: Response) {
    const id = req.params.id;
    console.log(req.body);
  }

  async test(req: Request, res: Response) {
    const data = moment().format("DD-MM-YYYY HH:mm");
    res.json({ data });
  }
}
