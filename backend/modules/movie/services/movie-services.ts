import movieModel from "../models/movieModel";
import { I_moviemodel } from "../utils/movieModel.interface";


export const createMovie = async (movieData: I_moviemodel) => {
    return await movieModel.create(movieData);
}


export const getMovieById = async (id: string) => {
    return await movieModel.findById(id);
}



export const getAllMovies = async (page: number, perPage: number) => {
    const skip = (page - 1) * perPage;
    const movies = await movieModel.find().skip(skip).limit(perPage);
    // const movies = await movieModel.find();

    const totalMovies = await movieModel.countDocuments();
    return { movies, totalMovies };
  };


export const updateMovie = async (id: string, updateData: Partial<I_moviemodel>) => {
    return await movieModel.findByIdAndUpdate(id, updateData, { new: true });
}


export const deleteMovie = async (id: string) => {
    return await movieModel.findByIdAndDelete(id);
}
