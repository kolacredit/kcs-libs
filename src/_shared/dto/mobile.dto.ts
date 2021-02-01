import { IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MobileDto {
  @ApiProperty({ example: '+2348017382910' })
  @IsPhoneNumber('ZZ')
  readonly phoneNumber: string;

  @ApiProperty({ example: 'NG' })
  @IsString()
  @IsOptional()
  @Length(2, 2)
  readonly isoCode: string = 'NG';
}
