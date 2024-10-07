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
  HasMany,
} from 'sequelize-typescript';
import User from './User.js';
import Brands from './Brands.js';
import Categories from './Categories.js';
import ProductVariantModel from './ProductVariants.js';

@Table({ tableName: 'products', timestamps: true })
class ProductsModel extends Model<ProductsModel> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => Brands) 
  @Column(DataType.UUID)
  brand_id!: string;

  @ForeignKey(() => Categories) 
  @Column(DataType.UUID)
  category_id?: string;

  @ForeignKey(() => Categories) 
  @Column(DataType.UUID)
  subcategory_id?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  condition?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  description?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  summary?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  universal_standard_code?: string;

  @Default('active')
  @Column(DataType.ENUM('active', 'inactive'))
  status!: string;

  @ForeignKey(() => User) 
  @Column(DataType.BIGINT)
  created_by?: number;

  @AllowNull(true)
  @Column(DataType.JSON)
  product_images?: string[];

  @AllowNull(true)
  @Column(DataType.INTEGER)
  stock_quantity?: number;  //available quantity

  @AllowNull(true)
  @Column(DataType.INTEGER)
  sold_quantity?: number;  //sold quantity

  @BelongsTo(() => Brands,{ foreignKey: 'brand_id' })
  brand?: Brands;

  @BelongsTo(() => Categories,{ foreignKey: 'category_id' })
  category?: Categories;

  @BelongsTo(() => Categories,{ foreignKey: 'subcategory_id' })
  subcategory?: Categories;

  @HasMany(() => ProductVariantModel)
  variants?: ProductVariantModel;
}

export default ProductsModel;
