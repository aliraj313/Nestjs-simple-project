import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/mongo/schema/user.schema';
import { Company, CompanySchema } from 'src/mongo/schema/company.schema';
import { CompanyRepository } from './repository/company.repository';
import { UserRepository } from './repository/user.repository';
import { ConfigsService } from 'src/configs/configs.service';

const mongoModels: DynamicModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Company.name, schema: CompanySchema },
]);
const repositories: Provider[] = [CompanyRepository, UserRepository];

@Global()
@Module({
  imports: [
    mongoModels,
    MongooseModule.forRootAsync({
      useFactory: (configs: ConfigsService) => ({
        uri: configs.DATABASE.MONGO.MONGO_CONNECTION_LINK,
      }),
      inject: [ConfigsService],
    }),
  ],
  providers: [MongoService, ...repositories],
  exports: [MongoService, ...repositories],
})
export class MongoModule {}
