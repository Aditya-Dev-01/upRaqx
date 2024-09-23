
  
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";

export const findUserByEmail= async (data:any)=>{
  const { email} = data;
  return await userModel.findOne({
   email: email 
  });
}
export const createUser=async(data:any)=>{
  return await userModel.create(data);
}


export const userTokens = async (
  userFound: any
): Promise<any> => {
  const token = jwt.sign(
      { id: userFound._id, },
      `${process.env.SECRETEKEY}`,
      { expiresIn: "1d" }
  );
return {access:token};
}

