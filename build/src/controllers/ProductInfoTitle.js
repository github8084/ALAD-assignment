var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Categories from "../database/models/Categories.js";
import ProductInfoDescription from "../database/models/ProductInfoDescription.js";
import ProductInfoTitle from "../database/models/ProductInfoTitle.js";
export const getProductInfos = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = request.query;
        const productInfos = yield ProductInfoTitle.findAll({
            attributes: ["name", "id"],
            include: [
                {
                    model: Categories,
                    where: {
                        id: categoryId,
                    },
                    attributes: ["name", "id"],
                },
                { model: ProductInfoDescription, attributes: ["name", "id"] },
            ],
        });
        return response.json(productInfos);
    }
    catch (error) {
        next(error);
    }
});
export const createProductInfoTitle = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, categoryIds } = request.body;
        const newProductInfoTitle = yield ProductInfoTitle.create({
            name,
        });
        if (categoryIds === null || categoryIds === void 0 ? void 0 : categoryIds.length)
            newProductInfoTitle.$add("categories", categoryIds);
        return response.json(newProductInfoTitle);
    }
    catch (error) {
        next(error);
    }
});
export const deleteProductInfoTitle = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.body;
        yield ProductInfoTitle.destroy({
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
//# sourceMappingURL=ProductInfoTitle.js.map