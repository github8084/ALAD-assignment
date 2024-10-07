var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, AllowNull, BelongsTo, ForeignKey, DataType, } from "sequelize-typescript";
import Orders from "./Orders.js";
import Products from "./Products.js";
let AmountOrderedProducts = class AmountOrderedProducts extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], AmountOrderedProducts.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column,
    __metadata("design:type", Number)
], AmountOrderedProducts.prototype, "amount", void 0);
__decorate([
    ForeignKey(() => Products),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], AmountOrderedProducts.prototype, "productId", void 0);
__decorate([
    BelongsTo(() => Products),
    __metadata("design:type", void 0)
], AmountOrderedProducts.prototype, "product", void 0);
__decorate([
    ForeignKey(() => Orders),
    Column,
    __metadata("design:type", Number)
], AmountOrderedProducts.prototype, "orderId", void 0);
__decorate([
    BelongsTo(() => Orders),
    __metadata("design:type", void 0)
], AmountOrderedProducts.prototype, "order", void 0);
AmountOrderedProducts = __decorate([
    Table
], AmountOrderedProducts);
export default AmountOrderedProducts;
//# sourceMappingURL=AmountOrderedProducts.js.map