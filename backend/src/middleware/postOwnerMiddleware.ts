import { Request, Response, NextFunction } from "express";
import { Posts } from "../moduels/posts/postsModel.js";

export const postOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (
      post.userId.toString() !==
      req.user.userId
    ) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};