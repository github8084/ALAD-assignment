var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Shops from "../database/models/Shops.js";
export const getShops = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shops = yield Shops.findAll({});
        return response.json(shops);
    }
    catch (error) {
        next(error);
    }
});
export const createShop = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city, country, adress, postalCode } = request.body;
        const userAdresses = yield Shops.create({
            city,
            country,
            adress,
            postalCode,
        });
        return response.json(userAdresses);
    }
    catch (error) {
        next(error);
    }
});
export const deleteShop = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.body;
        yield Shops.destroy({
            where: {
                id,
            },
        });
        return response.json({ message: "Deleted" });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=Shops.js.map