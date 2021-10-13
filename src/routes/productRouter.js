import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/sort', productController.getSortedProducts);
router.get('/detail', productController.getProductDetail);

export default router;
