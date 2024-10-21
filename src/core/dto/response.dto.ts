import { HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';

export class ResponseDto {
  statusCode: HttpStatus = HttpStatus.OK;

  message?: string;

  data?: object;

  errors?: string[];

  debug?: any;

  timestamp?: string;

  path?: string;

  withStatus(statusCode: HttpStatus): ResponseDto {
    this.statusCode = statusCode;
    return this;
  }

  withMessage(message: string): ResponseDto {
    this.message = message;
    return this;
  }

  withSuccessMessage(): ResponseDto {
    this.message = 'SUCCESS';
    return this;
  }

  withData(data: object): ResponseDto {
    this.data = data;
    return this;
  }

  withError(error: Error, request: Request): ResponseDto {
    this.errors = [error.message];
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.timestamp = new Date().toISOString();
    this.path = request.url;
    return this;
  }

  withHttpException(exception: HttpException, request: Request): ResponseDto {
    const exceptionResponse = exception.getResponse();

    this.statusCode = exception.getStatus();
    this.errors =
      typeof exceptionResponse === 'string'
        ? [exceptionResponse]
        : exceptionResponse['message'];
    this.timestamp = new Date().toISOString();
    this.path = request.url;

    return this;
  }
}
