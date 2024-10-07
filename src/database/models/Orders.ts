import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import User from './User.js';
import ProductsModel from './Products.js';
import ProductVariantModel from './ProductVariants.js';

@Table({ tableName: 'orders', timestamps: true })
class OrderModel extends Model<OrderModel> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  pick_up_latitude!: string;

  @ForeignKey(() => User) 
  @AllowNull(false)
  @Column(DataType.UUID)
  user_id!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  payment_id?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  warehouse_id!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  outlet_id!: string;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  warehouse_po_box?: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  warehouse_address?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  outlet_address?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  pick_up_longitude!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  drop_latitude!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  drop_longitude!: string;

  @AllowNull(false)
  @Column(DataType.JSON)
  vendor_details!: object;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  po_box?: number;

  @AllowNull(true)
  @Column(DataType.JSON)
  product_arr?: object;

  @AllowNull(true)
  @Column(DataType.JSON)
  retailer_product_arr?: object;

  @AllowNull(true)
  @Column(DataType.BIGINT)
  additional_commission_rate_for_retailer?: number;

  @AllowNull(true)
  @Column(DataType.BIGINT)
  coupon_id?: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  sub_total!: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  retailer_sub_total!: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  delivery_charges!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  payment_method!: string;

  @Default('Cash on Delivery')
  @AllowNull(false)
  @Column(DataType.ENUM('Cash on Delivery', 'Paypal', 'Debit Card', 'Credit Card', 'Razorpay'))
  payment_method_enum!: 'Cash on Delivery' | 'Paypal' | 'Debit Card' | 'Credit Card' | 'Razorpay';

  @Default('pending')
  @AllowNull(false)
  @Column(DataType.ENUM('complete', 'failed', 'pending'))
  payment_status!: 'complete' | 'failed' | 'pending';

  @AllowNull(true)
  @Column(DataType.STRING)
  payment_mode?: string;

  @Default('new')
  @AllowNull(false)
  @Column(DataType.ENUM(
    'new',
    'dispatched',
    'orderaccepted',
    'processing',
    'outfordelivery',
    'delivered',
    'cancelled',
    'return-request',
    'return-failed',
    'return-success',
    'acceptedbyFE'
  ))
  status!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  card_details?: string;

  @Default('IN')
  @AllowNull(true)
  @Column(DataType.STRING)
  country_code!: string;

  @AllowNull(true)
  @Column(DataType.JSON)
  card_data?: object;

  @AllowNull(true)
  @Column(DataType.STRING)
  txn_id?: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  order_date!: Date;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  order_accepted_by_vendor!: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  delivery_date?: Date;

  @AllowNull(true)
  @Column(DataType.STRING)
  ref_id?: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  shipping_date?: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  out_for_delivery_date?: Date;

  @AllowNull(true)
  @Column(DataType.STRING)
  delivery_instructions?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  apiHit?: number;

  @AllowNull(true)
  @Column(DataType.DATE)
  lastHitTime?: Date;

  @AllowNull(true)
  @Column(DataType.STRING)
  pickupToDropDistance?: string;


  
}

export default OrderModel;

