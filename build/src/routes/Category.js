import express from "express";
import { createCategory } from "../controllers/Category.js";
import { checkJwt } from "../middleware/checkJwt.js";
import { CategoryRoutes } from "../types/Routes.js";
const categoryRouter = express.Router();
categoryRouter.post(CategoryRoutes.CREATE, checkJwt, createCategory);
export default categoryRouter;
//# sourceMappingURL=Category.js.map