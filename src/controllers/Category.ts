import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/Product.js";
const productService = new ProductService();

export const createCategory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let {name,category_id} = request.body;   

    let newCategory = await productService.createCategory({name,category_id})

    return response.json({newCategory});
  } catch (error) {
    next(error);
  }
};
