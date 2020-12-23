import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: 'Task 1' })
  @IsString()
  @Transform(s => s.trim().toLowerCase())
  readonly title: string;

  @ApiProperty({ example: '3820' })
  @IsString()
  @Transform(s => s.trim())
  readonly description: string;
}
