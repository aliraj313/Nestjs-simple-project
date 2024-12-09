import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CompanyDto } from './company.dto';
import { User } from 'src/mongo/schema/user.schema';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email address of the user.',
    example: 'user@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The full name of the user.',
    example: 'Ali Rajabi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The name of the company the user is associated with.',
    example: 'Acme Corp',
  })
  @IsString()
  companyName: string;
}

export class CreateUserResponseDto extends User {
  @ApiProperty({
    description: "The user's email address",
    example: 'ali@example.com',
  })
  email: string;

  @ApiProperty({ description: "The user's name", example: 'Ali Rajabi' })
  name: string;

  @ApiProperty({
    description: 'The creation timestamp of the user record',
    example: '2024-12-09T01:31:53.270Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The last update timestamp of the user record',
    example: '2024-12-09T01:31:53.270Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: "Alias for the user's unique identifier",
    example: '6756488993a079586e19fc00',
  })
  id?: string;
}

export class GetUserResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: '675646bab6fccf09e7129678',
  })
  _id: string;

  @ApiProperty({
    description: "The user's email address",
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({ description: "The user's name", example: 'Ali Rajabi' })
  name: string;

  @ApiProperty({
    description: 'The creation timestamp of the user record',
    example: '2024-12-09T01:24:10.097Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'The last update timestamp of the user record',
    example: '2024-12-09T01:24:10.097Z',
  })
  updatedAt: string;

  @ApiProperty({ description: 'Mongoose version key', example: 0 })
  __v: number;

  @ApiProperty({
    type: [CompanyDto],
    description: 'List of companies associated with the user',
  })
  companies: CompanyDto[];

  @ApiProperty({
    description: "Alias for the user's unique identifier",
    example: '675646bab6fccf09e7129678',
  })
  id: string;
}
