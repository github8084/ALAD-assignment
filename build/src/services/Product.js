var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Op } from 'sequelize';
import Brands from '../database/models/Brands.js';
import Categories from '../database/models/Categories.js';
import Product from '../database/models/Products.js';
import ProductVariantModel from '../database/models/ProductVariants.js';
import Color from '../database/models/Color.js';
import Size from '../database/models/Size.js';
import Material from '../database/models/Material.js';
export class ProductService {
    createBrand(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Brands.create(data);
            return result.toJSON();
        });
    }
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Categories.create(data);
            return result.toJSON();
        });
    }
    createColor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Color.create(data);
            return result.toJSON();
        });
    }
    createSize(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Size.create(data);
            return result.toJSON();
        });
    }
    createMaterial(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Material.create(data);
            return result.toJSON();
        });
    }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Product.create(data);
            return result.toJSON();
        });
    }
    getProduct(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Product.findOne({ where: query });
            return result ? result.toJSON() : null;
        });
    }
    getAllProducts(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, limit, name, size, color, material } = filters;
            const offset = (page - 1) * limit;
            const products = yield Product.findAll({
                where: Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { title: { [Op.iLike]: `%${name}%` } })), (size && { size_id: size })), (color && { color_id: color })), (material && { material_id: material })),
                attributes: ["id", "title", "condition", "description", "summary", "universal_standard_code", "status", "product_images"],
                include: [
                    {
                        model: Brands,
                        as: 'brand',
                        attributes: ["name"]
                    },
                    {
                        model: Categories,
                        as: 'category',
                        attributes: ["name"]
                    },
                    {
                        model: Categories,
                        as: 'subcategory',
                        attributes: ["name"]
                    },
                    {
                        model: ProductVariantModel,
                        as: 'variants',
                        attributes: ["id", "title", "compare_price_at", "minimum_order_quantity", "price_details", "sku", "packaging_type", "is_vat_inclusive", "expiry_date", "packaging_date", "discount_type", "discount", "discountedPrice", "status", "images"],
                        include: [
                            {
                                model: Color,
                                as: 'color',
                                attributes: ["name", "code"]
                            },
                            {
                                model: Size,
                                as: 'size',
                                attributes: ["name"]
                            },
                            {
                                model: Material,
                                as: 'material',
                                attributes: ["name"]
                            },
                        ]
                    },
                ],
                limit: limit,
                offset: offset,
            });
            return products.map(product => product.toJSON());
        });
    }
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield Product.findByPk(id);
            if (product) {
                yield product.update(data);
                return product.toJSON();
            }
            return null;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Product.destroy({ where: { id } });
            return result > 0;
        });
    }
    createProductVariant(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ProductVariantModel.create(data);
            return result.toJSON();
        });
    }
    getProductVariant(query, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ProductVariantModel.findOne({ where: query, attributes });
            return result ? result.toJSON() : null;
        });
    }
    updateProductVariantStock(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProductVariantModel.decrement('stock_quantity', {
                by: data.quantity,
                where: { id },
            });
            yield ProductVariantModel.increment('sold_quantity', {
                by: data.quantity,
                where: { id },
            });
            return null;
        });
    }
    updateProductVariant(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const productVariant = yield ProductVariantModel.findByPk(id);
            if (productVariant) {
                yield productVariant.update(data);
                return productVariant.toJSON();
            }
            return null;
        });
    }
    getAllProductVariant(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ProductVariantModel.findAll({ where: query });
            return result.map(variant => variant.toJSON());
        });
    }
    deleteProductVariant(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ProductVariantModel.destroy({ where: query });
            return result > 0;
        });
    }
}
//# sourceMappingURL=Product.js.map