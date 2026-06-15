import { Posts } from "./postsModel.js";

export class postService {
  getAllPosts = async () => {
    try {
      const posts = await Posts.find();
      return posts;
    } catch (error) {
      throw new Error("Error fetching posts: " + error);
    }
  };

  //get Posts by id
  getPostById = async (id: string) => {
    return await Posts.findById(id);
  };

  //POST posts
  postPosts = async (data: any) => {
    try {
      const newPost = new Posts(data);
      const savedPost = await newPost.save();
      return savedPost;
    } catch (error) {
      console.error("failed ceating post", error);
    }
  };
  //PUT post by ID
  putPost = async (id: string, data: any) => {
    try {
      const exitPost = await Posts.findOne({ id: Number(id) });
      if (!exitPost) {
        return { success: false, error: "post not found" };
      }

      exitPost.set(data);
      const updatingPost = await exitPost.save();
      return { success: true, data: updatingPost };
    } catch (error) {
      console.error("failed updating post{PUT}", error);
    }
  };
  //PATCH posts by ID
  patchPost = async (id: string, data: any) => {
    try {
      const updatedpost = await Posts.findOneAndUpdate(
        { id: Number(id) },
        data,
        {
          new: true,
        },
      );
      if (!updatedpost) {
        return { success: false, error: "post not found" };
      }

      return { success: true, data: updatedpost };
    } catch (error) {
      console.error("failed updating post{PATCH}", error);
    }
  };
  //DELETE Posts by ID
  deletePost = async (id: string) => {
    try {
      const exitPost = await Posts.findOne({ id: Number(id) });
      if (!exitPost) {
        return { success: false, error: "post not found" };
      }

      await exitPost.deleteOne();
      return { success: true, data: "post delete successfully" };
    } catch (error) {
      console.error("failed deleteing post{delete}", error);
    }
  };
}
