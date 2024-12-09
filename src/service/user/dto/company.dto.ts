import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty({ description: 'The unique identifier of the company', example: '675646bab6fccf09e712967a' })
  _id: string;

  @ApiProperty({ description: 'The user ID to which this company belongs', example: '675646bab6fccf09e7129678' })
  userId: string;

  @ApiProperty({ description: 'The name of the company', example: 'Acme Corp' })
  name: string;

  @ApiProperty({ description: 'The creation timestamp of the company record', example: '2024-12-09T01:24:10.109Z' })
  createdAt: string;

  @ApiProperty({ description: 'The last update timestamp of the company record', example: '2024-12-09T01:24:10.109Z' })
  updatedAt: string;

  @ApiProperty({ description: 'Mongoose version key', example: 0 })
  __v: number;
}
