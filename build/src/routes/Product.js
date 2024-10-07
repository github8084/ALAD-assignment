import express from "express";
import { createBulkProduct, createProduct, deleteProducts, editProduct, getProducts, } from "../controllers/Product.js";
import { checkJwt } from "../middleware/checkJwt.js";
import { ProductRoutes } from "../types/Routes.js";
const productRouter = express.Router();
productRouter.get(ProductRoutes.GET, getProducts);
productRouter.post(ProductRoutes.CREATE, checkJwt, createProduct);
productRouter.put(ProductRoutes.EDIT, checkJwt, editProduct);
productRouter.delete(ProductRoutes.DELETE, checkJwt, deleteProducts);
productRouter.post(ProductRoutes.BULK_CREATE, checkJwt, createBulkProduct);
export default productRouter;
//# sourceMappingURL=Product.js.map