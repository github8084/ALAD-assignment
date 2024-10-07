import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const signJwt = (id: string, email: string, user_type: string) => {
  const secretKey = process.env.SECRET_KEY as string;

  return jwt.sign({ id, email, user_type }, secretKey, {
    expiresIn: "12h",
  });
};
