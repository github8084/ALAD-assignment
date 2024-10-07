var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import jwt from "jsonwebtoken";
import UserAdresses from "../database/models/UserAdresses.js";
export const getUserAdresses = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        const userAdresses = yield UserAdresses.findOne({
            where: {
                user_id: id,
            },
        });
        return response.json(userAdresses);
    }
    catch (error) {
        next(error);
    }
});
export const createUserAdress = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { city, country, adress, postalCode } = request.body;
        const token = (_b = request.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        const userAdresses = yield UserAdresses.create({
            city,
            country,
            adress,
            postalCode,
            user_id: id,
        });
        return response.json(userAdresses);
    }
    catch (error) {
        next(error);
    }
});
export const editUserAdress = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const params = __rest(request.body, []);
        const token = (_c = request.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        yield UserAdresses.update(Object.assign({}, params), {
            where: {
                user_id: id,
            },
        });
        return response.json({ message: "updated" });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=UserAdresses.js.map