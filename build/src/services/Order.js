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
import OrderModel from '../database/models/Orders.js';
export class OrderService {
    createOrder(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderModel.create(data);
            return result.toJSON();
        });
    }
    getOrder(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderModel.findOne({ where: query });
            return result ? result.toJSON() : null;
        });
    }
    getAllOrders(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, limit, name, size, color, material } = filters;
            const offset = (page - 1) * limit;
            const Orders = yield OrderModel.findAll({
                where: Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { title: { [Op.iLike]: `%${name}%` } })), (size && { size_id: size })), (color && { color_id: color })), (material && { material_id: material })),
                attributes: ["vendor_details", "po_box", "product_arr", "retailer_product_arr", "additional_commission_rate_for_retailer", "coupon_id", "sub_total", "retailer_sub_total",
                    "delivery_charges", "payment_method_enum", "payment_status", "status"],
                limit: limit,
                offset: offset,
            });
            return Orders.map(Order => Order.toJSON());
        });
    }
    updateOrder(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const Order = yield OrderModel.findOne(query);
            if (Order) {
                yield Order.update(data);
                return Order.toJSON();
            }
            return null;
        });
    }
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield OrderModel.destroy({ where: { id } });
            return result > 0;
        });
    }
}
//# sourceMappingURL=Order.js.map