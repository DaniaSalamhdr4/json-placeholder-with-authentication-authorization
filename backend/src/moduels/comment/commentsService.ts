import { Comments } from "./commentsMpdel.js";

export class commentService {
  getAllComments = async () => {
    try {
      const comments = await Comments.find();
      return comments;
    } catch (error) {
      throw new Error("Error fetching comments: " + error);
    }
  };

  // GET comments by posts id
  getCommentsByIdPost = async (id: string) => {
    const comments = await Comments.find({ postId: Number(id) });
    return comments;
  };
}
