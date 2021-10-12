import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/signin', userController.signInUser);
router.get('/signup/id', userController.checkUserName);
router.get('/signup', userController.getAllUser);
router.get('/', userController.getAllUser);

export default router;
