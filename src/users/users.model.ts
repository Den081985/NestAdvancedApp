import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IUserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: '',
  })
  banReason: string;
}
