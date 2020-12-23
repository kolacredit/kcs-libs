import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AppException } from '../exceptions';

@Injectable()
export class ApiMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // check header or url parameters or post parameters for token
    const apiKey: any = req.query.api_key || req.headers['x-api-key'];
    if (!apiKey) {
      return next(new AppException('Api key absent', HttpStatus.UNAUTHORIZED));
    }
    // decode token
    if (apiKey !== process.env.API_KEY && !process.env.API_KEY.includes(apiKey)) {
      return next(new AppException('Invalid Api Key', HttpStatus.UNAUTHORIZED));
    }
    next();
  }
}
