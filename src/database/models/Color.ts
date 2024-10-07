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

@Table({ tableName: 'colors', timestamps: false })
class Color extends Model<Color> {
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
  
  @AllowNull(false)
  @Column
  code!: string;

}

export default Color;
