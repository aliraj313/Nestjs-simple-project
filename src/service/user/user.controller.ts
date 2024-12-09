import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponseDto, GetUserResponseDto } from './dto/create-user.dto';
import { ParseMongoIdPipe } from 'src/pipes/mongoId.pipe';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new user', description: 'Creates a new user and returns the created user object.' })
  @ApiResponse({ status: 201, description: 'User successfully created.', type: CreateUserResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async createUser(@Body() data: CreateUserDto): Promise<CreateUserResponseDto> {
    return this.userService.createUser(data);
   }

  @Get(':userId')
  @ApiOperation({
    summary: 'Find a user by ID',
    description: 'Retrieves a user and their associated companies by ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'User found and returned.',
    type: GetUserResponseDto,
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findUser(
    @Param('userId', ParseMongoIdPipe) userId: string,
  ): Promise<GetUserResponseDto> {
    return this.userService.findUser(userId);
  }
}
