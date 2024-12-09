import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { MongoModule } from './mongo/mongo.module';
import { ThirdPartyModule } from './third-party/third-party.module';

@Module({
  imports: [ServiceModule, MongoModule, ThirdPartyModule],
})
export class AppModule {}
