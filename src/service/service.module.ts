import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigsModule } from '../configs/configs.module';

@Module({
  imports: [UserModule, ConfigsModule],
})
export class ServiceModule {}
