import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { RolesController } from './roles.controller';
import { Roles } from './roles.model';
import { RolesService } from './roles.service';
import { UserRoles } from './user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Roles, User, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
