import express from "express";
import { createBrand } from "../controllers/Brand.js";
import { BrandRoutes } from "../types/Routes.js";
import { checkJwt } from "../middleware/checkJwt.js";

const brandRouter = express.Router();

brandRouter.post(BrandRoutes.CREATE, checkJwt, createBrand);

export default brandRouter;
