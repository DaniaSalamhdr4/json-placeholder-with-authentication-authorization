import { Request, Response, NextFunction } from "express";
import { Comments } from "../moduels/comment/commentsMpdel.js";

export const commentOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const comment = await Comments.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    if ((comment as any).userId?.toString() !== req.user.userId) {
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
