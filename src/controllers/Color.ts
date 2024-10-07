import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/Product.js";
const productService = new ProductService();

export const createColor = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let {name,code} = request.body;   

    let newColor = await productService.createColor({name,code})

    return response.json({newColor});
  } catch (error) {
    next(error);
  }
};
