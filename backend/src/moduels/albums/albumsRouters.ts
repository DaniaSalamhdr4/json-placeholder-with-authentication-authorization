import { getAlbumsController } from "./albumsController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAlbumsController);

export default router;
