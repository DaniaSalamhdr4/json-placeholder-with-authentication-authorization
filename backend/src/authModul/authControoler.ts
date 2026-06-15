import { Response, Request } from "express";
import { body, validationResult } from "express-validator";
import { authServices } from "./authService.js";

const authOb = new authServices();

export class authController {
  registerController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const userData = req.body;
    const newuser = await authOb.registerServices(userData);
    res.json(newuser);
  };
}
