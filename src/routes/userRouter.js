import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/signup/id', userController.checkRealName);
router.post('/signup', userController.clickButtonCheckSignup);
router.get('/', userController.getAlluser);

export default router;
