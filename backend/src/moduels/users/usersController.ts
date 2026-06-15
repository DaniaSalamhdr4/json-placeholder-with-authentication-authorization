import { userServices } from "./usersService.js";
import type { Request, Response } from "express";

const userOb = new userServices();
//get all users
export class userController{
getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await userOb.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};
}