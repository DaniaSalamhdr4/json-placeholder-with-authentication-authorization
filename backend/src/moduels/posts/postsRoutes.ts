import { postController } from "./postsController.js";
import { Router } from "express";

const router = Router();
const postOb = new postController();

//get all posts
router.get("/", postOb.getPostsController);
router.get("/:id", postOb.getPostByIDController);
router.post("/", postOb.createPostController);
router.put("/:id", postOb.updatePostController);
router.patch("/:id", postOb.updatePostControllerPatch);
router.delete("/:id", postOb.deletePostControllerPat);
export default router;
