import { getPhotosController } from "./photosController.js";
import { Router } from "express";

const router = Router();

//get all photos
router.get("/",getPhotosController);

export default router;