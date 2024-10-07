var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ProductImages from "../database/models/ProductImages.js";
export const createProductImage = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { productId } = request.body;
        const newProductImage = yield ProductImages.create({
            productId,
            name: (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename,
        });
        return response.json(newProductImage);
    }
    catch (error) {
        next(error);
    }
});
export const deleteProductImage = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.body;
        yield ProductImages.destroy({
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
//# sourceMappingURL=ProductImage.js.map