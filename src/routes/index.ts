import express from "express";
import brandRouter from "./Brand.js";
import categoryRouter from "./Category.js";
import productRouter from "./Product.js";
import userRouter from "./User.js";
import ordersRouter from "./Orders.js";
import colorRouter from "./Color.js";
import sizeRouter from "./Size.js";
import materialRouter from "./Material.js";

const router = express.Router();

router.use("/", brandRouter);
router.use("/", categoryRouter);
router.use("/", colorRouter);
router.use("/", sizeRouter);
router.use("/", materialRouter);
router.use("/", productRouter);
router.use("/", userRouter);
router.use("/", ordersRouter);

export default router;
