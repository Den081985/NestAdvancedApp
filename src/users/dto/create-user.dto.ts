import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'user email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}
