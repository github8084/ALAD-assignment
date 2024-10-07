var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, AllowNull, Default, ForeignKey, BelongsTo, } from 'sequelize-typescript';
import ProductsModel from './Products.js';
import Color from './Color.js';
import Size from './Size.js';
import Material from './Material.js';
import User from './User.js';
let ProductVariantModel = class ProductVariantModel extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "id", void 0);
__decorate([
    ForeignKey(() => ProductsModel),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "product_id", void 0);
__decorate([
    Default('active'),
    Column(DataType.ENUM('active', 'inactive')),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "status", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "title", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.JSON),
    __metadata("design:type", Array)
], ProductVariantModel.prototype, "images", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "compare_price_at", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "minimum_order_quantity", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], ProductVariantModel.prototype, "warehouse_arr", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "price_details", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "input_field", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "sku", void 0);
__decorate([
    ForeignKey(() => Color),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "color_id", void 0);
__decorate([
    ForeignKey(() => Size),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "size_id", void 0);
__decorate([
    ForeignKey(() => Material),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "material_id", void 0);
__decorate([
    ForeignKey(() => User),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "created_by", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "packaging_type", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "is_vat_inclusive", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], ProductVariantModel.prototype, "expiry_date", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], ProductVariantModel.prototype, "packaging_date", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.ENUM('fixed', 'percentage')),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "discount_type", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], ProductVariantModel.prototype, "discount", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.FLOAT),
    __metadata("design:type", Number)
], ProductVariantModel.prototype, "discountedPrice", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductVariantModel.prototype, "other_value", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], ProductVariantModel.prototype, "stock_quantity", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], ProductVariantModel.prototype, "sold_quantity", void 0);
__decorate([
    BelongsTo(() => Color, { foreignKey: 'color_id' }),
    __metadata("design:type", Color)
], ProductVariantModel.prototype, "color", void 0);
__decorate([
    BelongsTo(() => Size, { foreignKey: 'size_id' }),
    __metadata("design:type", Size)
], ProductVariantModel.prototype, "size", void 0);
__decorate([
    BelongsTo(() => Material, { foreignKey: 'material_id' }),
    __metadata("design:type", Material)
], ProductVariantModel.prototype, "material", void 0);
ProductVariantModel = __decorate([
    Table({ tableName: 'product_variants', timestamps: true })
], ProductVariantModel);
export default ProductVariantModel;
//# sourceMappingURL=ProductVariants.js.map