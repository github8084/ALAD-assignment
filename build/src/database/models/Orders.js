var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, AllowNull, Default, ForeignKey, } from 'sequelize-typescript';
import User from './User.js';
let OrderModel = class OrderModel extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], OrderModel.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "pick_up_latitude", void 0);
__decorate([
    ForeignKey(() => User),
    AllowNull(false),
    Column(DataType.UUID),
    __metadata("design:type", String)
], OrderModel.prototype, "user_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "payment_id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "warehouse_id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "outlet_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], OrderModel.prototype, "warehouse_po_box", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "warehouse_address", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "outlet_address", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "pick_up_longitude", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "drop_latitude", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "drop_longitude", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], OrderModel.prototype, "vendor_details", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.INTEGER),
    __metadata("design:type", Number)
], OrderModel.prototype, "po_box", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], OrderModel.prototype, "product_arr", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], OrderModel.prototype, "retailer_product_arr", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], OrderModel.prototype, "additional_commission_rate_for_retailer", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], OrderModel.prototype, "coupon_id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], OrderModel.prototype, "sub_total", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], OrderModel.prototype, "retailer_sub_total", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.BIGINT),
    __metadata("design:type", Number)
], OrderModel.prototype, "delivery_charges", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "payment_method", void 0);
__decorate([
    Default('Cash on Delivery'),
    AllowNull(false),
    Column(DataType.ENUM('Cash on Delivery', 'Paypal', 'Debit Card', 'Credit Card', 'Razorpay')),
    __metadata("design:type", String)
], OrderModel.prototype, "payment_method_enum", void 0);
__decorate([
    Default('pending'),
    AllowNull(false),
    Column(DataType.ENUM('complete', 'failed', 'pending')),
    __metadata("design:type", String)
], OrderModel.prototype, "payment_status", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "payment_mode", void 0);
__decorate([
    Default('new'),
    AllowNull(false),
    Column(DataType.ENUM('new', 'dispatched', 'orderaccepted', 'processing', 'outfordelivery', 'delivered', 'cancelled', 'return-request', 'return-failed', 'return-success', 'acceptedbyFE')),
    __metadata("design:type", String)
], OrderModel.prototype, "status", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "card_details", void 0);
__decorate([
    Default('IN'),
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "country_code", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.JSON),
    __metadata("design:type", Object)
], OrderModel.prototype, "card_data", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "txn_id", void 0);
__decorate([
    Default(DataType.NOW),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "order_date", void 0);
__decorate([
    Default(DataType.NOW),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "order_accepted_by_vendor", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "delivery_date", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "ref_id", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "shipping_date", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "out_for_delivery_date", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "delivery_instructions", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", Number)
], OrderModel.prototype, "apiHit", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.DATE),
    __metadata("design:type", Date)
], OrderModel.prototype, "lastHitTime", void 0);
__decorate([
    AllowNull(true),
    Column(DataType.STRING),
    __metadata("design:type", String)
], OrderModel.prototype, "pickupToDropDistance", void 0);
OrderModel = __decorate([
    Table({ tableName: 'orders', timestamps: true })
], OrderModel);
export default OrderModel;
//# sourceMappingURL=Orders.js.map