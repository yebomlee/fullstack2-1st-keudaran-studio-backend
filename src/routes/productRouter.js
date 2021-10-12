import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/all', productController.getAllProducts);
router.get('/low', productController.lowPricedProducts);
router.get('/high', productController.highPricedProducts);
router.get('/name', productController.namedProducts);
router.get('/date', productController.datedProducts);
router.get('/detail', productController.getProductDetail);

export default router;
