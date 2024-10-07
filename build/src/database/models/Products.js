var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, AllowNull, Default, ForeignKey, BelongsTo, HasMany, } from 'sequelize-typescript';
import User from './User.js';
import Brands from './Brands.js';
import Categories from './Categories.js';
import ProductVariantModel from './ProductVariants.js';
let ProductsModel = class ProductsModel extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], ProductsModel.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Brands),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductsModel.prototype, "brand_id", void 0);
__decorate([
    ForeignKey(() => Categories),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductsModel.prototype, "category_id", void 0);
__decorate([
    ForeignKey(() => Categories),
    Column(DataType.UUID),
    __metadata("design:type", String)
], ProductsModel.prototype, "subcategory_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductsModel.prototype, "condition", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductsModel.prototype, "description", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductsModel.prototype, "summary", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductsModel.prototype, "title", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], ProductsModel.prototype, "universal_standard_code", void 0);
__decorate([
    Default('active'),
    Column(DataType.ENUM('active', 'inactive')),
    __metadata("design:type", String)
], ProductsModel.prototype, "status", void 0);
__decorate([
    ForeignKey(() => User),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], ProductsModel.prototype, "created_by", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.JSON),
    __metadata("design:type", Array)
], ProductsModel.prototype, "product_images", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], ProductsModel.prototype, "stock_quantity", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], ProductsModel.prototype, "sold_quantity", void 0);
__decorate([
    BelongsTo(() => Brands, { foreignKey: 'brand_id' }),
    __metadata("design:type", Brands)
], ProductsModel.prototype, "brand", void 0);
__decorate([
    BelongsTo(() => Categories, { foreignKey: 'category_id' }),
    __metadata("design:type", Categories)
], ProductsModel.prototype, "category", void 0);
__decorate([
    BelongsTo(() => Categories, { foreignKey: 'subcategory_id' }),
    __metadata("design:type", Categories)
], ProductsModel.prototype, "subcategory", void 0);
__decorate([
    HasMany(() => ProductVariantModel),
    __metadata("design:type", ProductVariantModel)
], ProductsModel.prototype, "variants", void 0);
ProductsModel = __decorate([
    Table({ tableName: 'products', timestamps: true })
], ProductsModel);
export default ProductsModel;
//# sourceMappingURL=Products.js.map