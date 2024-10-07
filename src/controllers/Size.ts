import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/Product.js";
const productService = new ProductService();

export const createSize = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let {name} = request.body;   

    let newSize = await productService.createSize({name})

    return response.json({newSize});
  } catch (error) {
    next(error);
  }
};
