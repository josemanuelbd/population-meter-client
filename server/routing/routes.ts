import { Request, Response } from 'express';
import loginPost from '../mocks/login.post.json';
import { Routes } from './types';

const routes: Routes = [
  {
    method: 'post',
    url: '/api/login',
    handler: (req: Request, res: Response): Response => {
      return res.status(200).json(loginPost);
    }
  }
];

export default routes;
