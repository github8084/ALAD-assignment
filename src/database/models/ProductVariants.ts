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
import ProductsModel from './Products.js';
import Color from './Color.js';
import Size from './Size.js';
import Material from './Material.js';
import User from './User.js';

@Table({ tableName: 'product_variants', timestamps: true })
class ProductVariantModel extends Model<ProductVariantModel> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => ProductsModel) 
  @AllowNull(false)
  @Column(DataType.UUID)
  product_id!: string;

  @Default('active')
  @Column(DataType.ENUM('active', 'inactive'))
  status!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.JSON)
  images!: string[];

  @AllowNull(true)
  @Column(DataType.STRING)
  compare_price_at?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  minimum_order_quantity?: string;

  @AllowNull(false)
  @Column(DataType.JSON)
  warehouse_arr!: object;

  @AllowNull(false)
  @Column(DataType.STRING)
  price_details!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  input_field?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  sku?: string;

  @ForeignKey(() => Color) 
  @AllowNull(false)
  @Column(DataType.UUID)
  color_id?: string;

  @ForeignKey(() => Size) 
  @AllowNull(false)
  @Column(DataType.UUID)
  size_id?: string;

  @ForeignKey(() => Material) 
  @AllowNull(false)
  @Column(DataType.UUID)
  material_id?: string;

  @ForeignKey(() => User) 
  @AllowNull(false)
  @Column(DataType.UUID)
  created_by!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  packaging_type!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  is_vat_inclusive!: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  expiry_date?: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  packaging_date?: Date;

  @AllowNull(true)
  @Column(DataType.ENUM('fixed', 'percentage'))
  discount_type?: 'fixed' | 'percentage';

  @AllowNull(true)
  @Column(DataType.BIGINT)
  discount?: number;

  @AllowNull(true)
  @Column(DataType.FLOAT)
  discountedPrice?: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  other_value?: string;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  stock_quantity?: number;  //available quantity

  @AllowNull(true)
  @Column(DataType.INTEGER)
  sold_quantity?: number;  //sold quantity

  @BelongsTo(() => Color,{ foreignKey: 'color_id' })
  color?: Color;

  @BelongsTo(() => Size,{ foreignKey: 'size_id' })
  size?: Size;

  @BelongsTo(() => Material,{ foreignKey: 'material_id' })
  material?: Material;
}

export default ProductVariantModel;
