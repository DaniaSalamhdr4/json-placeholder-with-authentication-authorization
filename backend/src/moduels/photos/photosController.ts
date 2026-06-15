import { getAllPhotos } from "./photosService.js";
import type { Request, Response } from "express";

export const getPhotosController = async (req: Request, res: Response) => {
  try {
    const photos = await getAllPhotos();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all photos" });
  }
};
