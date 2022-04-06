import { NextFunction } from 'express';
import { Logger } from '@nestjs/common';

const log = new Logger();

function logger(req: Request, res: Response, next: NextFunction) {
    log.log(`METHOD: "${req.method.toUpperCase()}" URL: "${req.url}"`);
    next();
}

export default logger;
