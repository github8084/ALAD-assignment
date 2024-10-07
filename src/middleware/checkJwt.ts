import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { UserService } from "../services/User.js";
const userService = new UserService();
dotenv.config();

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json("jwt must be provided!"); // Forbidden
  }

  const token = <string>req.headers.authorization?.split(" ")[1];

  const secretKey = process.env.SECRET_KEY as string;

  if (!token) throw Error("jwt must be provided!");

  const jwtPayload = <any>jwt.verify(token, secretKey);

  if (!jwtPayload) throw Error("Not authorized!");

  const { id } = jwtPayload;

  const existUser = id ? await userService.getUser({
    id: id
  }) : null;

  if (!existUser) throw Error("Not authorized!");

  req.body.user_id = id;

  next();
};
