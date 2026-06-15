import mongoose from "mongoose";
export const commentsSchema = new mongoose.Schema({
  postId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

export const Comments = mongoose.model("Comments", commentsSchema);