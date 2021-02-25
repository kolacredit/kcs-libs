import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ example: 'Task 1' })
  @IsString()
  readonly title: string;

  @ApiProperty({ example: '3820' })
  @IsString()
  readonly description: string;
}
