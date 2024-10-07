import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/Product.js";
const productService = new ProductService();

export const createBrand = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let {name} = request.body;   

    let newBrand = await productService.createBrand({name})

    return response.json({newBrand});
  } catch (error) {
    next(error);
  }
};
