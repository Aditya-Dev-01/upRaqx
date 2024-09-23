import mongoose from "mongoose";

export interface I_moviemodel {
  title: string;
  year: string;
  poster:string;
  createdAt: string;
  updatedAt: string;
}
export interface I_userUpdateData extends I_moviemodel {
  _id?:mongoose.Types.ObjectId;
}