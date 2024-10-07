import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export const signJwt = (id, email, user_type) => {
    const secretKey = process.env.SECRET_KEY;
    return jwt.sign({ id, email, user_type }, secretKey, {
        expiresIn: "12h",
    });
};
//# sourceMappingURL=signJwt.js.map