import { commentService } from "./commentsService.js";
import type { Request, Response } from "express";

const commentOb = new commentService();

export class commentController {
  //get all comment
  getCommentsController = async (req: Request, res: Response) => {
    try {
      const { postId } = req.query;
      if (postId) {
        const comment = await commentOb.getCommentsByIdPost(String(postId));
        return res.json(comment);
      }
      const comment = await commentOb.getAllComments();
      res.status(200).json(comment);
    } catch (error) {
      console.error("Error fetching all comments", error);
    }
  };

  //GET comments by posts id

  getCommentsByIdPostController = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const comment = await commentOb.getCommentsByIdPost(id);
      res.status(200).json(comment);
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  };
}
