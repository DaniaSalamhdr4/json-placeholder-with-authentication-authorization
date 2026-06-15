import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export const Todo = mongoose.model("Todo", todoSchema);
