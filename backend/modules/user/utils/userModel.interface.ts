import mongoose from "mongoose";

export interface I_usermodel {
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
export interface I_userUpdateData extends I_usermodel {
  _id?:mongoose.Types.ObjectId;
}