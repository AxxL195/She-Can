import { login } from '../controllers/user.controllers.js';
import User from '../models/user.model.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/login', login);

export default userRouter;