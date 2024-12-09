import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from 'src/mongo/schema/company.schema';
import { User } from 'src/mongo/schema/user.schema';

@Injectable()
export class MongoService {
  @InjectModel(User.name) user: Model<User>;
  @InjectModel(Company.name) company: Model<Company>;
}
