import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({ example: 'Task 1' })
  title: string;

  @ApiProperty({ example: 'The todo description' })
  description: string;
}
