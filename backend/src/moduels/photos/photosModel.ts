import mongoose from "mongoose";
export const photosSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});


export const Photos = mongoose.model("Photos", photosSchema);