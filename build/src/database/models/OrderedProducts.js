var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, ForeignKey, DataType, } from "sequelize-typescript";
import Orders from "./Orders.js";
import Products from "./Products.js";
let OrderedProducts = class OrderedProducts extends Model {
};
__decorate([
    ForeignKey(() => Orders),
    Column,
    __metadata("design:type", Number)
], OrderedProducts.prototype, "orderId", void 0);
__decorate([
    ForeignKey(() => Products),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], OrderedProducts.prototype, "productId", void 0);
OrderedProducts = __decorate([
    Table
], OrderedProducts);
export default OrderedProducts;
//# sourceMappingURL=OrderedProducts.js.map