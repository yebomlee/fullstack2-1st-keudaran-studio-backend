import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/low', productController.sortLowPrice);
router.get('/high', productController.sortHighPrice);
router.get('/name', productController.sortName);
router.get('/date', productController.sortDate);

export default router;
