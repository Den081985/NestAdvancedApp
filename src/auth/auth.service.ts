import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);

    return await this.generateToken(user);
  }

  async register(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hash = await bcrypt.hash(userDto.password, 10);

    const user = await this.userService.createUser({
      ...userDto,
      password: hash,
    });
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, role: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(dto.email);

    const comparedPassword = await bcrypt.compare(dto.password, user.password);

    if (user && comparedPassword) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Uncorrect email or password' });
  }
}
