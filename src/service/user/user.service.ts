import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetUserResponseDto,
} from './dto/create-user.dto';
import { UserRepository } from 'src/mongo/repository/user.repository';
import { EmailService } from 'src/third-party/email/email.service';
import { CompanyRepository } from 'src/mongo/repository/company.repository';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly companyRepo: CompanyRepository,
    private readonly emailService: EmailService,
  ) {}

  async createUser(data: CreateUserDto): Promise<CreateUserResponseDto> {
    const { companyName, email, name } = data;
    const user = await this.userRepo.create({ email, name });

    // we don't want wait for email response,just send it.
    this.emailService.sendHelloEmail(user);

    await this.companyRepo.create({
      name: companyName,
      userId: new Types.ObjectId(user.id),
    });

    return user;
  }

  async findUser(userId: string): Promise<GetUserResponseDto> {
    return (await this.userRepo.findByIdOrThrow(userId)).populate('companies');
  }
}
