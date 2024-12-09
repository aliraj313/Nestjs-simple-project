import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigsService extends ConfigService {
  DATABASE = {
    MONGO: {
      MONGO_CONNECTION_LINK: this.getOrThrow('MONGO_CONNECTION_LINK'),
    },
  };

  getOrThrow(key: string): string {
    return this.get(key);
  }
}
