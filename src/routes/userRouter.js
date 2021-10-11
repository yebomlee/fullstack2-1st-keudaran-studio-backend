import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/signin', userController.signInUser);

export default router;
