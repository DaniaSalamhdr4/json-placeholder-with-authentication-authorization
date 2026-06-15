import mongoose from "mongoose";
export const postsSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export const Posts = mongoose.model("Posts", postsSchema);

