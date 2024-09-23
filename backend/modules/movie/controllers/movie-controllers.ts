import { Request, Response } from "express";
import { CustomError } from "../../../middlewares/customError";
import { asyncMiddleware } from "../../../middlewares/middlewares";
import { validateMovie, validateUpdateMovie } from "../validations/movie-validations";
import { createMovie, getMovieById, getAllMovies, updateMovie, deleteMovie } from "../services/movie-services";
import { I_moviemodel } from "../utils/movieModel.interface";

export const createMovieController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const { error, value } = validateMovie(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }
    if (!req.file) {
      throw new CustomError("Poster image is required", 404);
    }

    const newMovie = await createMovie({
      poster: `/uploads/${req.file.filename}`,
      ...value,
    });
    return res.status(201).json({
      message: "Movie created successfully",
      movie: newMovie,
    });
  }
);

export const getMovieByIdController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const movie = await getMovieById(req.params.id);
    if (!movie) {
      throw new CustomError("Movie not found", 404);
    }
    return res.status(200).json({
      message: "Movie retrieved successfully",
      movie,
    });
  }
);

export const getAllMoviesController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const page = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.perPage as string) || 10;
    const { movies, totalMovies } = await getAllMovies(page, perPage);
    return res.status(200).json({
      message: "Movies retrieved successfully",
      movies,
      currentPage: page,
      totalPages: Math.ceil(totalMovies / perPage),
      perPage,
      totalMovies,
    });
  }
);

export const updateMovieController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const { error, value } = validateUpdateMovie(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const updateData: Partial<I_moviemodel> = { ...value };

    if (req.file) {
      updateData.poster = `/uploads/${req.file.filename}`;
    }

    const updatedMovie = await updateMovie(req.params.id, updateData);
    if (!updatedMovie) {
      throw new CustomError("Movie not found", 404);
    }
    return res.status(200).json({
      message: "Movie updated successfully",
      movie: updatedMovie,
    });
  }
);

export const deleteMovieController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const deletedMovie = await deleteMovie(req.params.id);
    if (!deletedMovie) {
      throw new CustomError("Movie not found", 404);
    }
    return res.status(200).json({
      message: "Movie deleted successfully",
    });
  }
);
