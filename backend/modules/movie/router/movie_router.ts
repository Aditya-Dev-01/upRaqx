import { Router } from "express";
import {
    createMovieController,
    getMovieByIdController,
    getAllMoviesController,
    updateMovieController,
    deleteMovieController
} from "../controllers/movie-controllers";
import { upload } from "../../../middlewares/middlewares";


export const movieRouter = Router();

movieRouter.post("/", upload.single("poster"), createMovieController);
movieRouter.get("/", getAllMoviesController);
movieRouter.get("/:id", getMovieByIdController);
movieRouter.put("/:id", upload.single("poster"), updateMovieController);
movieRouter.delete("/:id", deleteMovieController);
