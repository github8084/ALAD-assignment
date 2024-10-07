var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, AllowNull, BelongsTo, ForeignKey, DataType, BelongsToMany, } from "sequelize-typescript";
import DescriptionsProducts from "./DescriptionProducts.js";
import ProductInfoTitle from "./ProductInfoTitle.js";
import Products from "./Products.js";
let ProductInfoDescription = class ProductInfoDescription extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], ProductInfoDescription.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column,
    __metadata("design:type", String)
], ProductInfoDescription.prototype, "name", void 0);
__decorate([
    ForeignKey(() => ProductInfoTitle),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], ProductInfoDescription.prototype, "productInfoTitleId", void 0);
__decorate([
    BelongsTo(() => ProductInfoTitle),
    __metadata("design:type", void 0)
], ProductInfoDescription.prototype, "productInfoTitle", void 0);
__decorate([
    BelongsToMany(() => Products, () => DescriptionsProducts),
    __metadata("design:type", Array)
], ProductInfoDescription.prototype, "products", void 0);
ProductInfoDescription = __decorate([
    Table
], ProductInfoDescription);
export default ProductInfoDescription;
//# sourceMappingURL=ProductInfoDescription.js.map