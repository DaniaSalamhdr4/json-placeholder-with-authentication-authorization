import { commentController } from "./commentController.js";
import { Router } from "express";

const router = Router();
const commentOb = new commentController();

router.get("/", commentOb.getCommentsController);
router.get("/:id", commentOb.getCommentsByIdPostController);
export default router;
