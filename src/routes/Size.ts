import express from "express";
import { createSize } from "../controllers/Size.js";
import { SizeRoutes } from "../types/Routes.js";
import { checkJwt } from "../middleware/checkJwt.js";

const sizeRouter = express.Router();

sizeRouter.post(SizeRoutes.CREATE, checkJwt, createSize);

export default sizeRouter;
