import { User } from "../moduels/users/usersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class authServices {
  registerServices = async (userData: any) => {
    const { username, email, password } = userData;
    const userfiald = await User.findOne({ email });
    if (userfiald) {
      throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const { password: _, ...rest } = user.toObject();
    return rest;
  };
  loginServices = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );
    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  };
}
