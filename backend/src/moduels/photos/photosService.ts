import { Photos } from "./photosModel.js";

export const getAllPhotos = async () => {
  try {
    const photos = await Photos.find();
    return photos;
  } catch (error) {
    throw new Error("Error fetching photos: " + error);
  }
};


