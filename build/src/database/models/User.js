var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, Unique, AllowNull, Default, HasMany, } from 'sequelize-typescript';
import Orders from './Orders.js';
let User = class User extends Model {
    constructor() {
        super(...arguments);
        this.preferred_language = 'en';
        this.orders = [];
    }
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Column(DataType.ENUM("vendor", "logistic", "retailer", "employee", "admin", "vendor_sub_user", "logistic_sub_user", "retailer_sub_user", "horeca")),
    __metadata("design:type", String)
], User.prototype, "user_type", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "profile_photo", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "cognito_user_id", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "name_ar", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "dob", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "company_name", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "company_address_line_2", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "trade_license_number", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "company_address", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "po_box", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "designation", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "emirates_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "emirate_id_pic", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "residence_visa", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "passport", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "trade_license", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], User.prototype, "permission", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "cheque_scan", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "vat_certificate", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "iban", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "country_code", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    Default(0),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], User.prototype, "is_verified", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "account_status", void 0);
__decorate([
    Default(0),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], User.prototype, "is_social_login", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "accessToken", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "assign_to", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "created_by", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "drivingLicenseNumber", void 0);
__decorate([
    Unique,
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "drivingLicense", void 0);
__decorate([
    Default(0),
    Column(DataType.FLOAT),
    __metadata("design:type", Number)
], User.prototype, "distanceTravelled", void 0);
__decorate([
    Default(false),
    Column(DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], User.prototype, "assigned", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "FEstatus", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "deviceToken", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "brand_name", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "referred_by", void 0);
__decorate([
    CreatedAt,
    Column(DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    Column(DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "preferred_language", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], User.prototype, "company_website", void 0);
__decorate([
    HasMany(() => Orders),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
User = __decorate([
    Table({ tableName: 'users', timestamps: true })
], User);
export default User;
//# sourceMappingURL=User.js.map