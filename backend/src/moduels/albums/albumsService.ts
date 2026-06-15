import { Albums } from "./albumsModel.js";

export const getAlbums = async () => {
  try {
    const album = await Albums.find();

    return album;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
};
