import { log } from 'console';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({
        message: 'Unknown authorization',
      });

    const token = authHeader.split(' ')[1];

    if (!token)
      return res.status(401).json({
        message: 'Unknown authorization',
      });

    jwt.verify(token, 'secret', (err, user) => {
      if (err)
        return res.status(401).json({
          message: 'Unknown authorization',
        });

      req.user = user;
      next();
    });
  } catch (error) {}
};
