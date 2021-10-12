import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.delete('/signup/:id', userController.deleteUser);
router.post('/signup/username', userController.checkUserName);
router.post('/signup', userController.createUser);
router.post('/signin', userController.signInUser);
router.get('/', userController.getAlluser);

export default router;
