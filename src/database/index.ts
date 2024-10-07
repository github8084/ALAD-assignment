import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Brands from "./models/Brands.js";
import Categories from "./models/Categories.js";
import Orders from "./models/Orders.js";
import Products from "./models/Products.js";
import ProductVariants from "./models/ProductVariants.js";
import User from "./models/User.js";
import Color from "./models/Color.js";
import Size from "./models/Size.js";
import Material from "./models/Material.js";

dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  models: [
    Categories,
    Brands,
    Color,
    Size,
    Material,
    Products,
    ProductVariants,
    Orders,
    User
  ],
});
