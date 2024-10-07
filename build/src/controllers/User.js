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
import { UserService } from "../services/User.js";
import { hashPassword } from "../helpers/hashPassword.js";
import { signJwt } from "../helpers/signJwt.js";
import bcrypt from "bcrypt";
import { validatePassword } from "../helpers/passwordValidation.js";
const userService = new UserService();
export const registerUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, phone, email, password, user_type } = request.body;
        const existUser = yield userService.getUser({ email });
        if (existUser)
            throw Error("User already exist");
        if (!validatePassword(password))
            throw Error("Password must have Onelowercase, ONEuppercase, ONEnumber, ONE capital letter ,minimum length is 8 and maximum length is 16");
        const hashedPassword = yield hashPassword(password);
        const user = yield userService.createUser({
            name,
            phone,
            email,
            password: hashedPassword,
            user_type
        });
        const token = signJwt(user.id, user.email, user.user_type);
        return response.status(201).json({ msg: "Registered Successfully", token });
    }
    catch (error) {
        next(error);
    }
});
export const loginUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const user = yield userService.getUser({ email });
        if (!user)
            throw Error("User not found!");
        const isPassWordCorrect = yield bcrypt.compare(password, user.password);
        if (!isPassWordCorrect)
            throw Error("Password is incorrect");
        const token = signJwt(user.id, user.email, user.user_type);
        return response.json({ msg: "Login Success", token });
    }
    catch (error) {
        next(error);
    }
});
export const updateUser = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userData = request.body;
        let { email, password } = userData, updateUserData = __rest(userData, ["email", "password"]);
        const user = yield userService.updateUser(request.body.user_id, Object.assign({}, updateUserData));
        return response.json({ message: "Profile Updated Successfully" });
    }
    catch (error) {
        next(error);
    }
});
export const changePassword = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { current_password, new_password, user_id } = request.body;
        if (!current_password || !new_password)
            throw Error("Input Fields are missing!");
        const user = yield userService.getUser({ id: user_id });
        const isPassWordCorrect = yield bcrypt.compare(current_password, user.password);
        if (!isPassWordCorrect)
            throw Error("Current password is incorrect");
        const hashedPassword = yield hashPassword(new_password);
        yield userService.updateUser(user_id, { password: hashedPassword });
        return response.json({ message: "Password changed Successfully" });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=User.js.map