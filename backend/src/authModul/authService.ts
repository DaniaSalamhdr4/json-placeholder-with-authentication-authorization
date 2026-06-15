import { User } from "../moduels/users/usersModel.js";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";

export class authServices {
  registerServices = async (userData: any) => {
    const { username, email, password } = userData;
    const userfiald = await User.findOne({ email });
    if (userfiald) {
      throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await  User.create({ username, email, password: hashedPassword });
    const { password: _, ...rest } = user.toObject();
    return rest;
  };
}
