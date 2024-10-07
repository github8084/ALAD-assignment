import express from "express";
import { createMaterial } from "../controllers/Material.js";
import { MaterialRoutes } from "../types/Routes.js";
import { checkJwt } from "../middleware/checkJwt.js";
const materialRouter = express.Router();
materialRouter.post(MaterialRoutes.CREATE, checkJwt, createMaterial);
export default materialRouter;
//# sourceMappingURL=Material.js.map