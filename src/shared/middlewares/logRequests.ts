import { NextFunction, Request, Response } from 'express';

export function logRequests(request: Request, response: Response, next: NextFunction) {
    const { method, url } = request;
    console.log('==========')
    const logLabel = `[${method.toUpperCase()}] ${url}`
    console.log(logLabel);
    console.time(logLabel);
    next();
    console.timeEnd(logLabel);
    console.log('==========')
  }
