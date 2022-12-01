import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'user email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString({ message: 'Must be a string' })
  @Length(3, 20, { message: 'Wrong quantity of symbols' })
  readonly password: string;
}
