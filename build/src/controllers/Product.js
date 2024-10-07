var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as XLSX from 'xlsx';
import { ProductService } from "../services/Product.js";
const productService = new ProductService();
export const getProducts = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 10, name, size, color, material } = request.query;
        let filters = { page, limit, name, size, color, material };
        let products = yield productService.getAllProducts(filters);
        return response.json({ products });
    }
    catch (error) {
        next(error);
    }
});
export const createProduct = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { product_details, variants } = request.body;
        let newProduct = yield productService.createProduct(product_details);
        if (variants && variants.length > 0) {
            for (let variant of variants) {
                let price = parseFloat(variant.price_details);
                let discount = parseFloat(variant.discount);
                let discountedPrice = variant.discount_type == "percentage" ? ((parseFloat(variant.price_details) * (100 - discount)) / 100).toFixed(2) : (price - discount).toFixed(2);
                let newProductVariant = yield productService.createProductVariant(Object.assign(Object.assign({ product_id: newProduct.id }, variant), { sold_quantity: 0, discountedPrice }));
            }
        }
        return response.json({ msg: "Product added Successfully", newProduct });
    }
    catch (error) {
        next(error);
    }
});
export const editProduct = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { product_details, variants } = request.body;
        let newProduct = yield productService.updateProduct(product_details.id, product_details);
        if (variants && variants.length > 0) {
            for (let variant of variants) {
                let price = parseFloat(variant.price_details);
                let discount = parseFloat(variant.discount);
                let discountedPrice = variant.discount_type == "percentage" ? ((parseFloat(variant.price_details) * (100 - discount)) / 100).toFixed(2) : (price - discount).toFixed(2);
                let newProductVariant = yield productService.updateProductVariant(variant.id, Object.assign(Object.assign({ product_id: newProduct.id }, variant), { discountedPrice }));
            }
        }
        return response.json({ msg: "Product updated Successfully", newProduct });
    }
    catch (error) {
        next(error);
    }
});
export const deleteProducts = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_id } = request.body;
        let result = yield productService.deleteProduct(product_id);
        let variant_result = yield productService.deleteProductVariant({ product_id });
        if (result)
            return response.json({ msg: "Product deleted Successfully" });
        else
            return response.json({ msg: "Something went wrong!" });
    }
    catch (error) {
        next(error);
    }
});
export const createBulkProduct = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const buffer = request.body;
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    try {
        for (let productData of data) {
            let { brand_id, category_id, subcategory_id, condition, description, summary, title, universalStandardCode, status } = productData;
            let product_details = { brand_id, category_id, subcategory_id, condition, description, summary, title, universalStandardCode, status };
            let newProduct = yield productService.createProduct(product_details);
            if (productData.color_id && productData.size_id) {
                let { product_id, status, title, images, compare_price_at, minimum_order_quantity, warehouse_arr, price_details, input_field, sku, color_id, size_id, material_id, created_by, packaging_type, is_vat_inclusive, expiry_date, packaging_date, discount_type, discount, other_value, stock_quantity, sold_quantity } = productData;
                let variant_details = { product_id,
                    status,
                    title,
                    images,
                    compare_price_at,
                    minimum_order_quantity,
                    warehouse_arr,
                    price_details,
                    input_field,
                    sku,
                    color_id,
                    size_id,
                    material_id,
                    created_by,
                    packaging_type,
                    is_vat_inclusive,
                    expiry_date,
                    packaging_date,
                    discount_type,
                    discount,
                    other_value,
                    stock_quantity,
                    sold_quantity };
                let price = parseFloat(price_details);
                discount = parseFloat(discount);
                let discountedPrice = discount_type == "percentage" ? ((parseFloat(price_details) * (100 - discount)) / 100).toFixed(2) : (price - discount).toFixed(2);
                let newProductVariant = yield productService.createProductVariant(Object.assign(Object.assign({ product_id: newProduct.id }, variant_details), { sold_quantity: 0, discountedPrice: Number(discountedPrice) }));
            }
        }
        response.status(200).json({ message: 'Products processed successfully' });
    }
    catch (error) {
        console.error('Error processing products:', error);
        response.status(500).json({ message: 'Error processing products', error });
    }
});
//# sourceMappingURL=Product.js.map