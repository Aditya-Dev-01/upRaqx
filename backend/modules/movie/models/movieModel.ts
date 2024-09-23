import mongoose, { Mongoose, UpdateQuery } from "mongoose"
import { I_moviemodel } from "../utils/movieModel.interface";



const movieSchema = new mongoose.Schema<I_moviemodel>( {
    title: { type: String, required: true,unique:true },
    year: { type: String, required: true },
    poster: { type: String, required: true },
  },
  { timestamps: true }
  
  );

const movieModel=  mongoose.model<I_moviemodel>("movie",movieSchema)

export default movieModel