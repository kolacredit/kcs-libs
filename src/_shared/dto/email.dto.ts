import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({ example: 'example@test.com' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
