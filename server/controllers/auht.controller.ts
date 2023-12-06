import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  /* const {} = req.body; */

  const token = jwt.sign(
    {
      test: '',
    },
    'secret',
    {
      expiresIn: 60 * 60 * 24,
    },
  );

  return res.json({ token });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    message: 'Profile data',
  });
};

export default { loginHandler, profileHandler };
