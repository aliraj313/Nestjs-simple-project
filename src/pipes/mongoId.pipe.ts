import {
  PipeTransform,
  Injectable,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any) {
    if (!Types.ObjectId.isValid(value)) {
      throw new HttpException(
        `Invalid MongoDB ObjectId: ${value}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
