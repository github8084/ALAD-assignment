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
import UserPeronal from "../database/models/UserPersonalInfo.js";
import jwt from "jsonwebtoken";
export const getUserPersonal = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        const userPersonal = yield UserPeronal.findOne({
            where: {
                user_id: id,
            },
        });
        return response.json(userPersonal);
    }
    catch (error) {
        next(error);
    }
});
export const createUserPersonal = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { name, surname, phoneNumber } = request.body;
        const token = (_b = request.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        const userPersonal = yield UserPeronal.create({
            name,
            surname,
            phoneNumber,
            user_id: id,
        });
        return response.json(userPersonal);
    }
    catch (error) {
        next(error);
    }
});
export const editUserPersonal = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const params = __rest(request.body, []);
        const token = (_c = request.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(" ")[1];
        const jwtDecoded = jwt.decode(token);
        const { id } = jwtDecoded;
        yield UserPeronal.update(Object.assign({}, params), {
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
//# sourceMappingURL=UserPersonal.js.map