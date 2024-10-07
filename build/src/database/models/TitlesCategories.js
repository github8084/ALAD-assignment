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
import Categories from "./Categories.js";
import ProductInfoTitle from "./ProductInfoTitle.js";
let TitlesCategories = class TitlesCategories extends Model {
};
__decorate([
    ForeignKey(() => Categories),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], TitlesCategories.prototype, "categoryId", void 0);
__decorate([
    ForeignKey(() => ProductInfoTitle),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], TitlesCategories.prototype, "prodInfoTitleId", void 0);
TitlesCategories = __decorate([
    Table
], TitlesCategories);
export default TitlesCategories;
//# sourceMappingURL=TitlesCategories.js.map