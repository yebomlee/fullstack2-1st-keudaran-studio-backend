import express from 'express';
import { userController } from '../controllers';
import tokenVerification from '../middleWares/tokenVerification';

const router = express.Router();

router.post('/signup/delete', tokenVerification, userController.deleteUser);
router.post('/signup/username', userController.checkUserName);
router.post('/signup', userController.createUser);
router.post('/signin', userController.signInUser);
router.get('/', userController.getAlluser);

export default router;
