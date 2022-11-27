import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/CreateRoleDto';
import { Roles } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private roleModel: typeof Roles) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleModel.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({ where: { value: value } });
    return role;
  }
}
