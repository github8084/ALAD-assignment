var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { UserService } from "../services/User.js";
const userService = new UserService();
dotenv.config();
export const checkJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json("jwt must be provided!");
    }
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const secretKey = process.env.SECRET_KEY;
    if (!token)
        throw Error("jwt must be provided!");
    const jwtPayload = jwt.verify(token, secretKey);
    if (!jwtPayload)
        throw Error("Not authorized!");
    const { id } = jwtPayload;
    const existUser = id ? yield userService.getUser({
        id: id
    }) : null;
    if (!existUser)
        throw Error("Not authorized!");
    req.body.user_id = id;
    next();
});
//# sourceMappingURL=checkJwt.js.map