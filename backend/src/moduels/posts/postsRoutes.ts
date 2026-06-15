import { postController } from "./postsController.js";
import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { postOwnerMiddleware } from "../../middleware/postOwnerMiddleware.js";
const router = Router();
const postOb = new postController();

//get all posts
router.get("/", postOb.getPostsController);
router.get("/:id", postOb.getPostByIDController);
router.post("/", authMiddleware, postOb.createPostController);
router.put(
  "/:id",
  authMiddleware,
  postOwnerMiddleware,
  postOb.updatePostController,
);
router.patch(
  "/:id",
  authMiddleware,
  postOwnerMiddleware,
  postOb.updatePostControllerPatch,
);
router.delete(
  "/:id",
  authMiddleware,
  postOwnerMiddleware,
  postOb.deletePostControllerPat,
);

export default router;
