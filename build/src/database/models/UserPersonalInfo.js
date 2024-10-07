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
import User from "./User.js";
let UserPersonal = class UserPersonal extends Model {
};
__decorate([
    Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], UserPersonal.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column,
    __metadata("design:type", String)
], UserPersonal.prototype, "phoneNumber", void 0);
__decorate([
    AllowNull(false),
    Column,
    __metadata("design:type", String)
], UserPersonal.prototype, "name", void 0);
__decorate([
    AllowNull(false),
    Column,
    __metadata("design:type", String)
], UserPersonal.prototype, "surname", void 0);
__decorate([
    ForeignKey(() => User),
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", String)
], UserPersonal.prototype, "user_id", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", void 0)
], UserPersonal.prototype, "user", void 0);
UserPersonal = __decorate([
    Table
], UserPersonal);
export default UserPersonal;
//# sourceMappingURL=UserPersonalInfo.js.map