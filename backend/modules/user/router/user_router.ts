import express, {  Router } from "express";
import { verifyToken } from "../../../middlewares/middlewares";
import {  userSignInController, userSignUpController } from "../controllers/unverified-controllers";

export const userRouter= Router();
userRouter.post('/signin',userSignInController)
userRouter.post('/signup',userSignUpController)
