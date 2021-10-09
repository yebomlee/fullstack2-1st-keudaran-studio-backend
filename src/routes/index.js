import express from 'express';
import userRouter from './userRouter';
import reviewRouter from './reviewRouter';
import categoryRouter from './categoryRouter';
import productRouter from './productRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);

export default router;
