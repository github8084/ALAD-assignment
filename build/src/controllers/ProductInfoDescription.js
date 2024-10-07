var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ProductInfoDescription from "../database/models/ProductInfoDescription.js";
export const createProductInfoDescription = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, productInfoTitleId } = request.body;
        const newProductInfoDescription = yield ProductInfoDescription.create({
            name,
            productInfoTitleId,
        });
        return response.json(newProductInfoDescription);
    }
    catch (error) {
        next(error);
    }
});
export const deleteProductInfoDescription = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.body;
        yield ProductInfoDescription.destroy({
            where: {
                id,
            },
            cascade: true,
        });
        return response.json({
            status: 200,
            message: "Deleted",
        });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=ProductInfoDescription.js.map