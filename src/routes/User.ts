import express from "express";
import {  changePassword, loginUser, registerUser, updateUser } from "../controllers/User.js";
import { checkJwt } from "../middleware/checkJwt.js";
import { UserRoutes } from "../types/Routes.js";

const userRouter = express.Router();

userRouter.post(UserRoutes.REGISTER, registerUser);
userRouter.post(UserRoutes.LOGIN, loginUser);
userRouter.put(UserRoutes.UPDATE,checkJwt, updateUser);
userRouter.patch(UserRoutes.CHANGE_PASSWORD,checkJwt, changePassword);
export default userRouter;
