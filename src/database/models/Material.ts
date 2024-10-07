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

@Table({ tableName: 'materials', timestamps: false })
class Material extends Model<Material> {
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

export default Material;
