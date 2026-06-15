import { postService } from "./postsService.js";
import type { Request, Response } from "express";
const postOb = new postService();

export class postController {
  //get all posts
  getPostsController = async (req: Request, res: Response) => {
    try {
      const posts = await postOb.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching all posts" });
    }
  };

  //get posts by id
  getPostByIDController = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const postsId = await postOb.getPostById(id);
      res.status(200).json(postsId);
    } catch (error) {
      res.status(500).json({ message: "Error fetching post by id" });
    }
  };

  //create post {POST}
  createPostController = async (req: Request, res: Response) => {
    try {
      const { title, body, userId } = req.body;
      if (!title || !body || !userId) {
        return res
          .status(400)
          .json({ message: "Missing required fields: title, body, userId" });
      }
      const newPost = await postOb.postPosts({ title, body, userId });
      res.status(201).json(newPost);
    } catch (error) {
      console.error("failed creatig postPosts", error);
    }
  };

  //update Post {PUT}

  updatePostController = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const result = await postOb.putPost(id, req.body);
      if (result?.success) {
        res.status(200).json(result.data);
      }
    } catch (error) {
      console.error("failed updating postPosts {controller}", error);
    }
  };

  //update Post {PATCH}

  updatePostControllerPatch = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const result = await postOb.patchPost(id, req.body);
      if (result?.success) {
        res.status(200).json(result.data);
      }
    } catch (error) {
      console.error("failed updating postPosts {controller}", error);
    }
  };

  //update Post {DELETE}
  deletePostControllerPat = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const { id } = req.params;
      const result = await postOb.deletePost(id);
      if (result?.success) {
        res.status(200).json(result.data);
      }
    } catch (error) {
      console.error("failed deleting postPosts {controller}", error);
    }
  };
}
