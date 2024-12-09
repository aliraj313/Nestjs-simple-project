import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base.repository';
import { User } from '../schema/user.schema';
import { MongoService } from '../mongo.service';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly mongo: MongoService) {
    super(mongo.user);
  }
}
