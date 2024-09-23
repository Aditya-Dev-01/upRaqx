import mongoose, { Mongoose, UpdateQuery } from "mongoose"
import { I_usermodel } from "../utils/userModel.interface"


const userSchema = new mongoose.Schema<I_usermodel>( {

    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
  },
  { timestamps: true }
  
  );

const userModel=  mongoose.model<I_usermodel>("user",userSchema)

export default userModel