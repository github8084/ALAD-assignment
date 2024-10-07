import express from "express";
import { createOrder, editOrders, getOrders } from "../controllers/Orders.js";
import { checkJwt } from "../middleware/checkJwt.js";
import { OrdersRoutes } from "../types/Routes.js";
const ordersRouter = express.Router();
ordersRouter.post(OrdersRoutes.CREATE, checkJwt, createOrder);
ordersRouter.get(OrdersRoutes.GET, checkJwt, getOrders);
ordersRouter.patch(OrdersRoutes.EDIT, checkJwt, editOrders);
export default ordersRouter;
//# sourceMappingURL=Orders.js.map