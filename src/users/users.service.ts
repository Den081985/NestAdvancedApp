import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserModel: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.UserModel.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.UserModel.findAll();
    return users;
  }
}
