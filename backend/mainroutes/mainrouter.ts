import express, { Express,Request,Response, Router } from "express";
import { userRouter } from "../modules/user/router/user_router";
import { movieRouter } from "../modules/movie/router/movie_router";


const mainRouter = Router()
mainRouter.use('/',userRouter)
mainRouter.use('/movies',movieRouter)


export default mainRouter; 