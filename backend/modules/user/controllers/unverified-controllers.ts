import { asyncMiddleware } from "../../../middlewares/middlewares";
import  { Express, Request, Response, } from "express";
import {
  createUser,
  findUserByEmail,
  userTokens,
} from "../services/unverified-services";
import { CustomError } from "../../../middlewares/customError";
import {
  validationForSign_In,
} from "../validations/user-validations";
import bcrypt from "bcrypt";

export const userSignUpController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const { error, value } = validationForSign_In(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }
    const {email,password}=value
    const hasedPassword=await bcrypt.hash(password,10)
    let obj={email,password:hasedPassword}
    const userFound = await createUser(obj);
    if (!userFound) {
      throw new CustomError("User Not Found", 404);
    }
    return res.status(201).json({message:"user created successfully",userFound})
  }
);

export const userSignInController = asyncMiddleware(
  async (req: Request, res: Response): Promise<Response> => {
    const { error, value } = validationForSign_In(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }
    const userFound = await findUserByEmail(value);
    if (!userFound) {
      throw new CustomError("User Not Found", 404);
    }
    if (await bcrypt.compare(value.password, userFound.password)) {
      const {  access } = await userTokens(userFound);
      return res.status(200).send({
        message:"Sign in Successful",
        token: access,
      });
    } else {
      throw new CustomError("Invalid Credentials", 400);
    }
  }
);

