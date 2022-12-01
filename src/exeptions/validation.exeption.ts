import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationExeptions extends HttpException {
  messages;

  constructor(response) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
