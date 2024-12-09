import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base/base.repository';
import { MongoService } from '../mongo.service';
import { Company } from '../schema/company.schema';

@Injectable()
export class CompanyRepository extends BaseRepository<Company> {
  constructor(private readonly mongo: MongoService) {
    super(mongo.company);
  }
}
