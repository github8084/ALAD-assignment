import {
  Table,
  Column,
  Model,
  AllowNull,
  Unique,
  HasMany,
  BelongsToMany,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

@Table({ tableName: 'categories', timestamps: false })
export default class Categories extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => Categories) 
  @Column(DataType.UUID)
  category_id?: string;

  @Unique
  @AllowNull(false)
  @Column
  name!: string;
}
