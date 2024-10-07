import express from "express";
import { createColor } from "../controllers/Color.js";
import { ColorRoutes } from "../types/Routes.js";
import { checkJwt } from "../middleware/checkJwt.js";
const colorRouter = express.Router();
colorRouter.post(ColorRoutes.CREATE, checkJwt, createColor);
export default colorRouter;
//# sourceMappingURL=Color.js.map