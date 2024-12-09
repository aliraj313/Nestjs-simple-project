import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendHelloEmail(user): Promise<void> {
    // this is a mock function that runs a long process
    console.log('send email : ', user);
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }
}
