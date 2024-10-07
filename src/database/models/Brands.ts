import {
  Table,
  Column,
  Model,
  AllowNull,
  Unique,
  HasMany,
  BelongsToMany,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: 'brands', timestamps: false })
class Brands extends Model<Brands> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Unique
  @AllowNull(false)
  @Column
  name!: string;

}

export default Brands;
