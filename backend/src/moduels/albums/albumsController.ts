import { getAlbums } from "./albumsService.js";
import type { Request, Response } from "express";

export const getAlbumsController = async (req: Request, res: Response) => {
  try {
    const albums = await getAlbums();
    res.status(200).json(albums);
  } catch (error) {
    console.error("Error fetching all Albums", error);
  }
};
