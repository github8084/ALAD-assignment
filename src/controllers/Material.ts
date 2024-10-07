import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/Product.js";
const productService = new ProductService();

export const createMaterial = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let {name} = request.body;   

    let newMaterial = await productService.createMaterial({name})

    return response.json({newMaterial});
  } catch (error) {
    next(error);
  }
};
