import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import {Request, Response, NextFunction} from 'express'

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key']
    if(apiKey!=="requiredapikey"){
      throw new UnauthorizedException('Invalid Api Key')
    }
    next();
  }
}
