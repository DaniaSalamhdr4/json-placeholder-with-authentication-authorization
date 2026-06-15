import { authController } from "./authControoler.js";
import { Router } from "express";
import { body } from "express-validator";
const authOb = new authController();
const router = Router();

router.post("/", authOb.registerController);
export default router;
