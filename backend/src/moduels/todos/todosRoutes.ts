import { getTodosControllers } from "./todoController.js";
import { Router } from "express";

const router = Router();

//get all Todos
router.get("/", getTodosControllers);

export default router;
