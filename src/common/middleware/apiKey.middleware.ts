import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const publicPaths = req.method === 'GET';
    if (publicPaths) return next();

    const apiKey = req.headers['x-api-key'];
    if (apiKey !== 'secret-api-key') {
      throw new UnauthorizedException('Invalid API key');
    }
    next();
  }
}
