import { authController } from "./authControoler.js";
import { Router } from "express";
import { body } from "express-validator";
const authOb = new authController();
const router = Router();

router.post("/register", authOb.registerController);
router.post("/login", authOb.loginController);
export default router;
