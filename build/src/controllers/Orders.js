var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { OrderService } from "../services/Order.js";
import { ProductService } from "../services/Product.js";
const orderService = new OrderService();
const productService = new ProductService();
export const getOrders = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit = 3, page = 1 } = request.query;
        const orders = yield orderService.getAllOrders({ limit, page, user_id: request.body.user_id });
        return response.json({ orders });
    }
    catch (error) {
        next(error);
    }
});
export const createOrder = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sub_total = 0;
        let retailer_sub_total = 0;
        let product_arr = request.body.product_arr;
        let retailer_product_arr = request.body.retailer_product_arr;
        if (product_arr) {
            for (let product of product_arr) {
                let product_details = yield productService.getProductVariant({ id: product.product_variant_id }, ["stock_quantity", "discountedPrice"]);
                if (product_details.stock_quantity < product.quantity)
                    throw Error("Items Out of Stock");
                sub_total += product.quantity * product_details.discountedPrice;
                let update_quantity = yield productService.updateProductVariantStock(product.product_variant_id, { quantity: product.quantity });
            }
        }
        if (retailer_product_arr) {
            for (let retailer_product of retailer_product_arr) {
                let product_details = yield productService.getProductVariant({ id: retailer_product.product_variant_id }, ["stock_quantity", "discountedPrice"]);
                if (product_details.stock_quantity < retailer_product.quantity)
                    throw Error("Items Out of Stock");
                retailer_sub_total += retailer_product.quantity * product_details.discountedPrice;
                let update_quantity = yield productService.updateProductVariantStock(retailer_product.product_variant_id, { quantity: retailer_product.quantity });
            }
        }
        const newOrder = yield orderService.createOrder(Object.assign(Object.assign({ user_id: request.body.user_id, status: "new", order_date: new Date() }, request.body), { sub_total, retailer_sub_total }));
        return response.json({
            id: newOrder.id,
            message: `Order № ${newOrder.id} has been created`,
        });
    }
    catch (error) {
        next(error);
    }
});
export const editOrders = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order_id, status, order_accepted_by_vendor } = request.body;
        const orders = yield orderService.updateOrder({ order_id, user_id: request.body.user_id }, { status, order_accepted_by_vendor });
        return response.json({ msg: "Order updated successfully" });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=Orders.js.map