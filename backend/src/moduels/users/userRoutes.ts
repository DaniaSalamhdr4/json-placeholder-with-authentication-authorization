import { userController } from "./usersController.js";
import { Router } from "express";

const router = Router();
const userOb = new userController();

//get all users
router.get("/", userOb.getUsersController);

export default router;
