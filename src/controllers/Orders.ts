import { NextFunction, Request, Response } from "express";
import { OrderDTO, OrdersRequest } from "../types/Order.dto.js";
import jwt from "jsonwebtoken";
import { OrderService } from "../services/Order.js";
import { ProductService } from "../services/Product.js";

const orderService = new OrderService();
const productService = new ProductService();
export const getOrders = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { limit = 3, page = 1 } = request.query;

    const orders = await orderService.getAllOrders({ limit, page, user_id: request.body.user_id });
    return response.json({ orders });
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (
  request: OrdersRequest<OrderDTO>,
  response: Response,
  next: NextFunction
) => {
  try {
    let sub_total = 0;
    let retailer_sub_total = 0;
    let product_arr: any = request.body.product_arr
    let retailer_product_arr: any = request.body.retailer_product_arr
    if (product_arr) {
      for (let product of product_arr) {
        let product_details = await productService.getProductVariant({ id: product.product_variant_id }, ["stock_quantity", "discountedPrice"]);

        if (product_details.stock_quantity < product.quantity) throw Error("Items Out of Stock")
        sub_total += product.quantity * product_details.discountedPrice;
        let update_quantity = await productService.updateProductVariantStock(product.product_variant_id, { quantity: product.quantity });
      }
    }

    if (retailer_product_arr) {
      for (let retailer_product of retailer_product_arr) {
        let product_details = await productService.getProductVariant({ id: retailer_product.product_variant_id }, ["stock_quantity", "discountedPrice"]);

        if (product_details.stock_quantity < retailer_product.quantity) throw Error("Items Out of Stock")
        retailer_sub_total += retailer_product.quantity * product_details.discountedPrice;

        let update_quantity = await productService.updateProductVariantStock(retailer_product.product_variant_id, { quantity: retailer_product.quantity });

      }
    }

    const newOrder = await orderService.createOrder({ user_id: request.body.user_id, status: "new", order_date: new Date(), ...request.body, sub_total, retailer_sub_total });
    return response.json({
      id: newOrder.id,
      message: `Order № ${newOrder.id} has been created`,
    });
  } catch (error) {
    next(error);
  }
};

export const editOrders = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { order_id, status, order_accepted_by_vendor } = request.body;

    const orders = await orderService.updateOrder({ order_id, user_id: request.body.user_id }, { status, order_accepted_by_vendor });
    return response.json({msg:"Order updated successfully"});
  } catch (error) {
    next(error);
  }
};
