import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  Unique,
  AllowNull,
  Default,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import Orders from './Orders.js';

@Table({ tableName: 'users', timestamps: true })
class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column(DataType.ENUM("vendor","logistic","retailer","employee","admin","vendor_sub_user","logistic_sub_user","retailer_sub_user", "horeca"))
  user_type!: string;

  @Column(DataType.STRING)
  profile_photo?: string;

  @Column(DataType.STRING)
  cognito_user_id?: string;

  @Column(DataType.STRING)
  name?: string;

  @Column(DataType.STRING)
  name_ar?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  email?: string;

  @Column(DataType.STRING)
  phone!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  dob?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  company_name?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  company_address_line_2?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  trade_license_number?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  company_address?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  po_box?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  designation?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  emirates_id?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  emirate_id_pic?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  residence_visa?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  passport?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  trade_license?: string;

  @AllowNull(true)
  @Column(DataType.JSON)
  permission?: object;

  @AllowNull(true)
  @Column(DataType.STRING)
  cheque_scan?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  vat_certificate?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  iban?: string;

  @Column(DataType.STRING)
  country!: string;

  @Column(DataType.STRING)
  country_code!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  password?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  role?: string;

  @Default(0)
  @Column(DataType.INTEGER)
  is_verified!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  account_status?: string;

  @Default(0)
  @Column(DataType.INTEGER)
  is_social_login!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  accessToken?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  assign_to?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  created_by?: string;

  @Column(DataType.STRING)
  drivingLicenseNumber!: string;

  @Unique
  @Column(DataType.STRING)
  drivingLicense?: string;

  @Default(0)
  @Column(DataType.FLOAT)
  distanceTravelled!: number;

  @Default(false)
  @Column(DataType.BOOLEAN)
  assigned!: boolean;

  @Column(DataType.STRING)
  FEstatus?: string;

  @Column(DataType.STRING)
  deviceToken?: string;

  @Column(DataType.STRING)
  brand_name?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  referred_by?: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;

  @Column(DataType.STRING)
  preferred_language: string = 'en';

  @AllowNull(true)
  @Column(DataType.STRING)
  company_website?: string;

  @HasMany(() => Orders)
  orders: Orders[] = [];
}

export default User;

