import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Roles } from './roles.model';

@Table({ tableName: 'user_roles' })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '1', description: 'Primary Key' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Roles)
  @ApiProperty({ example: '1', description: 'Role Id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: '1', description: 'User Id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
